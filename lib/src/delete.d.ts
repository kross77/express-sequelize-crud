import { NextFunction, Request, RequestHandler, Response } from 'express';
export declare type Destroy = (id: string, expressParams: {
    req: Request;
    res: Response;
    next: NextFunction;
}) => Promise<any>;
export declare const destroy: (doDetroy: Destroy) => RequestHandler<import("express-serve-static-core").ParamsDictionary>;
