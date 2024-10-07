import { Application } from './application.interface';
import { ArchiveRecording } from './archive.interface';
import type { UserSlice } from './slice.interface';

export interface DataBase {
    users: (UserSlice & {
        password: string;
        magazine: Application[];
        archive: ArchiveRecording[];
    })[];
}

export type Modal = 'application';
export type SortOrder = 'asc' | 'desc';
