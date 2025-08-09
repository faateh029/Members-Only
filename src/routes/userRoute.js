import {Router} from 'express';
import { verifyToken } from '../middleware/jwtMiddleware.js';
import { allowedRoles } from '../middleware/allowRole.js';
import {club_join_controller , create_message_controller} from '../controllers/userControllers.js';
export const userRouter = new Router();
userRouter.post('/club-join' ,club_join_controller);
userRouter.post('/create-message' , verifyToken,create_message_controller)