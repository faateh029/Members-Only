import {Router} from 'express';
import { verifyToken } from '../middleware/jwtMiddleware.js';
import { allowedRoles } from '../middleware/allowRole.js';
import {clubjoinController, allUsersController , getDetailsController} from '../controllers/userControllers.js';
export const userRouter = new Router();

userRouter.post('/join-club' , verifyToken, clubjoinController);

userRouter.get('/all-users' ,verifyToken,allowedRoles('admin'),allUsersController);

userRouter.get('/get-details',allowedRoles('member' , 'admin') , getDetailsController);