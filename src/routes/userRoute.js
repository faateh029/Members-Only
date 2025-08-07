import {Router} from 'express';
import { verifyToken } from '../middleware/jwtMiddleware.js';
import {clubjoinController} from '../controllers/userControllers.js';
export const userRouter = new Router();

userRouter.post('/join-club' , verifyToken, clubjoinController);