import { RequestHandler, Request, Response, NextFunction } from 'express';
export declare type GetList<R> = (conf: {
    filter: Record<string, any>;
    limit: number;
    offset: number;
    order: Array<[string, string]>;
    req?: Request;
    res?: Response;
    next?: NextFunction;
}) => Promise<{
    rows: R[];
    count: number;
}>;
export declare type Search<R> = (q: string, limit: number, requestParams?: {
    req?: Request;
    res?: Response;
    next?: NextFunction;
}) => Promise<{
    rows: R[];
    count: number;
}>;
export declare const getMany: <R>(doGetFilteredList: GetList<R>, doGetSearchList?: Search<R> | undefined, filtersOption?: Record<string, (value: any) => any> | undefined) => RequestHandler<import("express-serve-static-core").ParamsDictionary>;
export declare const parseQuery: (query: any, filtersOption?: Record<string, (value: any) => any> | undefined) => {
    offset: any;
    limit: number;
    filter: {
        [x: string]: any;
    };
    order: [[string, string]];
    q: any;
};
export declare type FiltersOption = Record<string, (value: any) => any>;
