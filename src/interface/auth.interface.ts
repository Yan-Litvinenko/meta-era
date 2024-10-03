import { Application } from './file.interface';

export type UserAuth = {
    name: string;
    guid: string;
    password: string;
};

export type UserSlice = {
    name: string;
    guid: string;
    magazine: Application[];
};
