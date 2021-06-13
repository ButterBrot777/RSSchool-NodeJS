import express from 'express';
import { IError } from './logger';
export declare const errorHandler: (err: IError, _req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>;
export declare const catchErrors: (fn: any) => (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<any>;
