import {Router} from 'express';
import { verifyToken } from '../middleware/jwtMiddleware.js';
import  allowedRoles  from '../middleware/allowRole.js';
import {club_join_controller , create_message_controller , delete_messages_controller, get_messages_controller} from '../controllers/userControllers.js';
export const userRouter = new Router();
userRouter.post('/club-join' ,allowedRoles('admin' , 'user') ,club_join_controller);
userRouter.post('/create-message' , verifyToken, allowedRoles('admin','member'),create_message_controller)
userRouter.post('/get-messages' , verifyToken , get_messages_controller);
userRouter.delete('/message/:id' , verifyToken , allowedRoles('admin') , delete_messages_controller);