import express from 'express';
import User from '../models/userModel';
import userController from '../controllers/userController';

const controller = userController(User);

const routes = () => {
    const userRouter = express.Router();
    userRouter.route('/')
        .get(controller.get)
        .post(controller.post);
    return userRouter;
}

export default routes;
