import bcrypt from 'bcryptjs';  
import jwt from 'jsonwebtoken';
import userModel from '../models/usermodel.js';


export const register = async (req, res) => {

    const { name, email, password } = req.body;


    if(!name || !email || !password){
        return res.json({success:false, message: "All fields are required"});
    }

    try{

        const exiatingUser = await userModel.findOne({email});
        
        if(exiatingUser){
            return res.json({success: false, message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new userModel({name, email, password: hashedPassword});

        await user.save(); //user on database is saved

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"}); //token is created

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ?
            'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        }); //token is stored in cookie

        return res.json({success: true});



    }catch(error){

        res.json({success: false, message: error.message});
    }
    



}; // register function ends here


//login function starts here

export const login = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.json({success: false, message: "All fields are required"}); //if email or password is not provided
    } 

    try{

        const user = await userModel.findOne({email}); //find the user with the email provided  

        if(!user){
            return res.json({success: false, message: "Invalid email"}); //if user is not found
        }

        const ismatch = await bcrypt.compare(password, user.password); //compare the password provided with the password in the database

        if(!ismatch){
            return res.json({success: false, message: "Invalid password"}); //if password is incorrect
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"}); //token is created

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ?
            'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        }); //token is stored in cookie

        return res.json({success: true});


    } catch(error){
        return res.json({success: false, message: error.message});
    }


};

export const logout = async (req, res) => {

try {
    res.clearCookie('token',{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ?
        'none' : 'strict',

    })

    return res.json({success: true, message: "Logged out"});


} catch (error) {
    return res.json({success: false, message: error.message});

}

};