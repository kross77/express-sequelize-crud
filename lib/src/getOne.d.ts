import { NextFunction, Request, RequestHandler, Response } from 'express';
export declare type GetOne<R> = (identifier: string, expressParams: {
    req: Request;
    res: Response;
    next: NextFunction;
}) => Promise<R | null>;
export declare const getOne: <R>(doGetOne: GetOne<R>) => RequestHandler<import("express-serve-static-core").ParamsDictionary>;
