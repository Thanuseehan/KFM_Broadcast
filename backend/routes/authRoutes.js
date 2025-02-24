import express from 'express';
import { login, logout, register } from '../controllers/authcontroller.js';

const authRouter = express.Router();    

authRouter.post('/register',register); //register route
authRouter.post('/login',login); // login route
authRouter.post('/logout', logout); //   logout route     

export default authRouter;
// Compare this snippet from frontend/src/components/Login.js: 