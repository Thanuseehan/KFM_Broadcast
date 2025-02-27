import express from 'express';
import { login, logout, register, sendVerifyOtp, verifyEmail, isAuthenticated, sendResetOtp, resetPassword } from '../controllers/authcontroller.js';
import userAuth from '../middleware/userauth.js';
import userauth from "../middleware/userauth.js";


const authRouter = express.Router();    

authRouter.post('/register', register); // Register route
authRouter.post('/login', login); // Login route
authRouter.post('/logout', logout); // Logout route     
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp);    
authRouter.post('/verify-account', userAuth, verifyEmail); 
authRouter.post('/is-auth', userAuth, isAuthenticated);  // ✅ FIXED
authRouter.post('/send-reset-tp', sendResetOtp);  // ✅ FIXED
authRouter.post('/reset-password', resetPassword);  // ✅ FIXED

export default authRouter;
