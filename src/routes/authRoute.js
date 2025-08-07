import {Router} from 'express';
import {signupController , loginController} from '../controllers/authControllers.js';
export const authRouter = new Router();

authRouter.post('/signup' , signupController);
authRouter.post('/login' , loginController);
