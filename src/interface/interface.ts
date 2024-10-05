import type { UserSlice } from './slice.interface';

export interface DataBase {
    users: (UserSlice & { password: string })[];
}

export type Modal = 'application';
export type SortOrder = 'asc' | 'desc';
