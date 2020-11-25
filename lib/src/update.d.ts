import { NextFunction, Request, RequestHandler, Response } from 'express';
import { GetOne } from './getOne';
export declare type Update<R> = (id: string, data: R, expressParams: {
    req?: Request;
    res?: Response;
    next?: NextFunction;
}) => Promise<any>;
export declare const update: (doUpdate: Update<any>, doGetOne: GetOne<any>) => RequestHandler<import("express-serve-static-core").ParamsDictionary>;
