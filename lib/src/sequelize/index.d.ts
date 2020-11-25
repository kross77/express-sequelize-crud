import { Actions } from '..';
export declare const sequelizeCrud: <I extends string | number, R>(model: any) => Pick<Actions<I, R>, "update" | "destroy" | "getOne" | "create" | "getList">;
