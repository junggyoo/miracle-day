import express from 'express';
import { authController } from '../../controller/index.js';

const authRouter = express.Router();

authRouter.post('/signup', authController.signUp);

export default authRouter;
