import { Request, Response, NextFunction } from 'express';
declare function checkJWT(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
export { checkJWT };
