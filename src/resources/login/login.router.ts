import jwt from 'jsonwebtoken';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import express, { Request, Response } from 'express';
import asyncHandler from "express-async-handler";
import { JWT_SECRET_KEY } from '../../common/config';
import { authenticateUser } from "./login.service";

const loginRouter = express.Router();

loginRouter.route('/login').post(asyncHandler(async (req: Request, res: Response) => {
  const user = req.body;
  const userData = await authenticateUser(user);
  if (userData) {
    const userDto = { userId: userData.id, login: userData.login };
    const JWT = jwt.sign(userDto, String(JWT_SECRET_KEY));
    return res.status(StatusCodes.OK).json({token: JWT});
  }
  return res.status(StatusCodes.FORBIDDEN).json(ReasonPhrases.FORBIDDEN);
}));

export { loginRouter };
