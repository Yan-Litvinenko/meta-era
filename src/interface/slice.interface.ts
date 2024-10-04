import type { Application } from './application.interface';

export type UserSlice = {
    name: string;
    guid: string;
    magazine: Application[];
};

export type MagazineSlice = {
    magazine: Application[];
};

export type ModalSlice = {
    modal: {
        application: boolean;
    };
};
