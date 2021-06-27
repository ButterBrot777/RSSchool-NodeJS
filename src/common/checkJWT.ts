import jwt from 'jsonwebtoken';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET_KEY } from './config';

function checkJWT(req: Request, res: Response, next: NextFunction) {
  if (req.url === '/login' || req.url === '/doc' || req.url === '/') {
    return next();
  }
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const type = authHeader.split(' ')[0];
    const token = authHeader.split(' ')[1];
    if (token) {
      if (type !== 'Bearer' || !token) {
        return res.status(StatusCodes.UNAUTHORIZED).send('Wrong credentials');
      }
    }

    jwt.verify(token!, String(JWT_SECRET_KEY));
    return next();
  }
  return res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
}

export { checkJWT };
