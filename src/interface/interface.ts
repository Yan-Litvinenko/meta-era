import { UserSlice } from './auth.interface';

export interface DataBase {
    users: (UserSlice & { password: string })[];
}
