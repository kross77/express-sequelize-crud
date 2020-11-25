import { RequestHandler, Request, Response, NextFunction } from 'express';
export declare type Create<I extends string | number, R> = (body: R, expressParams: {
    req: Request;
    res: Response;
    next: NextFunction;
}) => Promise<R & {
    id: I;
}>;
export declare const create: <I extends string | number, R>(doCreate: Create<I, R>) => RequestHandler<import("express-serve-static-core").ParamsDictionary>;
