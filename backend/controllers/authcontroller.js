import bcrypt from 'bcryptjs';  
import jwt from 'jsonwebtoken';
import userModel from '../models/usermodel.js';
import { text } from 'express';
import transporter from '../config/nodemailer.js';


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

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Welcome to KFM Broadcast! 🎉 ",
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 10px; max-width: 600px; margin: auto;">
                    
                    <!-- Header with Company Logo -->
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h2 style="color: #0056b3; margin: 0;">Hi, ${name}! 👋</h2>
                        <img src="https://yourwebsite.com/path-to-your-logo.png" alt="KFM Broadcast Logo" 
                            style="width: 100px; height: auto;">
                    </div>
        
                    <p>We are excited to have you on board. Your account has been created successfully with the email: <strong>${email}</strong>.</p>
        
                    <!-- Welcome Image -->
                    <img src="https://yourwebsite.com/path-to-your-welcome-image.jpg" alt="Welcome Image" 
                        style="width:100%; max-width:600px; border-radius:10px; margin-top:10px;">
        
                    <p>If you have any questions, feel free to reach out to our support team.</p>
        
                    <hr style="border: 0; height: 1px; background: #ccc; margin: 20px 0;">
                    
                    <!-- Email Signature -->
                    <div style="margin-top: 20px;">
                        <p style="font-size: 14px; color: #555;">
                            Best Regards,<br>
                            <strong>KFM Broadcast Team</strong><br>
                            📧 <a href="mailto:support@kfmbroadcast.com" style="color: #0056b3;">support@kfmbroadcast.com</a><br>
                            📞 +1 (234) 567-8900<br>
                            🌐 <a href="https://kfmbroadcast.com" style="color: #0056b3;">www.kfmbroadcast.com</a>
                        </p>
                    </div>
                </div>
            `
        };
        
        

        await transporter.sendMail(mailOptions); //email is sent to the user


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

//send otp function starts here
export const sendVerifyOtp = async (req, res) => {
    try {
        const { userId } = req.body;

        // Find user in the database
        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        if (user.isAccountVerified) {
            return res.json({ success: false, message: "Account already verified" });
        }

        // Generate a 6-digit OTP
        const otp = String(Math.floor(100000 + Math.random() * 900000));

        // Store OTP in user document
        user.verifyOtp = otp;
        await user.save();

        // Define email options
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "🔑 Account Verification OTP",
            text: `Your OTP to verify your account is: ${otp}. It is valid for 10 minutes.`
        };

        // Send email with OTP
        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: "OTP sent via email" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export const verifyEmail = async (req, res) => {

    const { userId , otp } = req.body;

    if(!userId || !otp){
        return res.json({success: false, message: "All fields are required"});
    }

    try{
        const user = await userModel.findById(userId);

        if(!user){
            return res.json({success: false, message: "User not found"});
        }

        if(user.verifyOtp !== '' || user.verifyOtp !== otp){
            return res.json({success: false, message: "Invalid OTP"});
        }

        if (user.verifyOtpExpireAt < Date.now()) {
            return res.json({ success: false, message: "OTP has expired" });
        }

        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;

        await user.save();

        return res.json({success: true, message: "Account verified"});


    }
    catch{

        return res.json({success: false, message: error.message});
    }





};
