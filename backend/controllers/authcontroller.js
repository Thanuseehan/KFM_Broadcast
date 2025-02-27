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

        // if (!user) {
        //     return res.json({ success: false, message: "User not found" });
        // }

        if (user.isAccountVerified) {
            return res.json({ success: false, message: "Account already verified" });
        }

        // Generate a 6-digit OTP
        const otp = String(Math.floor(100000 + Math.random() * 900000));

        // Store OTP in user document
        user.verifyOtp = otp;
        user.verifyOtpExpires = Date.now() + 24 * 60 * 60 * 1000  
        await user.save();

        // Define email options
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "🔑 Account Verification OTP",
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 10px; max-width: 600px; margin: auto;">
                    
                    <!-- Header with Logo -->
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h2 style="color: #0056b3; margin: 0;">Account Verification</h2>
                        <img src="cid:companyLogo" alt="KFM Broadcast Logo" style="width: 100px; height: auto;">
                    </div>
        
                    <p>Dear <strong>${user.name}</strong>,</p>
        
                    <p>Your OTP for account verification is:  
                        <span style="display: inline-block; background: #0056b3; color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 5px;">${otp}</span>
                    </p>
        
                    <p>This OTP is valid for <strong>10 minutes</strong>. Please do not share it with anyone.</p>
        
                    <p>If you did not request this verification, please ignore this email.</p>
        
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
            `,
            attachments: [
                {
                    filename: "KFM_Broadcast.png",
                    // path: "Images/KFM Broadcast.png",
                    cid: "companyLogo" // Content ID for inline image
                }
            ]
        };
        
        // Send email with OTP
        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: "OTP sent via email" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};



export const verifyEmail = async (req, res) => {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
        return res.json({ success: false, message: "All fields are required" });
    }

    try {
        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // Check if OTP has expired
        if (user.verifyOtpExpires < Date.now()) {
            return res.json({ success: false, message: "OTP has expired" });
        }

        // Validate OTP
        if (user.verifyOtp === '' || user.verifyOtp !== otp) {
            return res.json({ success: false, message: "Invalid OTP" });
        }

        // Verify the account
        user.isAccountVerified = true;
        user.verifyOtp = ''; // Clear OTP after verification
        user.verifyOtpExpires = 0; // Reset expiry time

        await user.save();

        return res.json({ success: true, message: "Account verified" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export const isAuthenticated = async (req, res) => {
    try {
        return res.json({ success: true });
    } catch (error) {  // Add (error) inside catch
        res.json({ success: false, message: error.message });
    }
};


//send reset otp 

export const sendResetOtp = async (req, res) => {

    const {email} = req.body;

    if (!email) {
        return res.json({ success: false, message: "Email is required" });
    }

    try{

        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success: false, message: "User not found"});
        }


        const otp = String(Math.floor(100000 + Math.random() * 900000));

        // Store OTP in user document
        user.resetotp = otp;
        user.resetotpExpires = Date.now() + 24 * 60 * 60 * 1000  
        await user.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "🔑 Password reset otp",
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 10px; max-width: 600px; margin: auto;">
                    
                    <!-- Header with Logo -->
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h2 style="color: #0056b3; margin: 0;">Account Verification</h2>
                        <img src="cid:companyLogo" alt="KFM Broadcast Logo" style="width: 100px; height: auto;">
                    </div>
        
                    <p>Dear <strong>${user.name}</strong>,</p>
        
                    <p>Your OTP for Password reset is:  
                        <span style="display: inline-block; background: #0056b3; color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 5px;">${otp}</span>
                    </p>
        
                    <p>This OTP is valid for <strong>10 minutes</strong>. Please do not share it with anyone.</p>
        
                    <p>If you did not request this Password reset, please ignore this email.</p>
        
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
            `,
            attachments: [
                {
                    filename: "KFM_Broadcast.png",
                    // path: "Images/KFM Broadcast.png",
                    cid: "companyLogo" // Content ID for inline image
                }
            ]

        };

        await transporter.sendMail(mailOptions);

        return res.json({success: true, message: 'OTP sent to your mail'});

        

    } catch(error){
        return res.json({ success: false, message: error.message });

    }

};

export const resetPassword = async(req, res)=>{
    const {email, otp, newPassword} = req.body;

    if(!email || !otp || !newPassword){
        return res.json({success: false, message:'Email, OTP and new password are required'});
    }

    try{

        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: 'user not found'})
        }

        if(user.resetotp == "" || user.resetotp !== otp){
            return res.json({success: false, message: 'Invalaid OTP'})

        }

        if(user.resetotpExpires < Date.now()){
            return res.json({success: false, message:'OTP Expired'});
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetotp = '';
        user.resetotpExpires = 0;

        await user.save();

        return res.json({success: true, message: 'Password has been reset Successfully'});


    }catch(error){
        return res.json({ success: false, message: error.message });

    }

};