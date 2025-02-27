import express from 'express';
import { login, logout, register, sendVerifyOtp, verifyEmail } from '../controllers/authcontroller.js';
import userAuth from '../middleware/userauth.js';

const authRouter = express.Router();    

authRouter.post('/register',register); //register route
authRouter.post('/login',login); // login route
authRouter.post('/logout', logout); //   logout route     
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp); //   logout route    
authRouter.post('/verify-account', userAuth, verifyEmail) 



export default authRouter;


// Compare this snippet from frontend/src/components/Login.js: 