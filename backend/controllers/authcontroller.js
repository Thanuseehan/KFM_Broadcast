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

    } catch(error){
        res.json({success: false, message: error.message});
    }


};