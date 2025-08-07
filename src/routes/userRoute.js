import {Router} from 'express';
import { isAdmin, verifyToken } from '../middleware/jwtMiddleware.js';
import {clubjoinController, allUsersController} from '../controllers/userControllers.js';
export const userRouter = new Router();

userRouter.post('/join-club' , verifyToken, clubjoinController);

userRouter.get('/all-users' ,verifyToken, isAdmin,allUsersController);

userRouter.get('/get-details')