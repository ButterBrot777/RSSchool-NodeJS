import express from 'express';
export interface IError {
    code?: string;
    message?: string;
    stack?: string;
    status?: string;
}
export declare const logger: import("winston").Logger;
export declare const logInfo: (req: express.Request, _res: express.Response, next: express.NextFunction) => void;
export declare const logError: (err: IError, _req: express.Request, _res: express.Response, next: express.NextFunction) => void;
export declare const logProcessErrors: (message: string, err: IError) => void;
