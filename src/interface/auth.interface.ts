export type User = {
    name: string;
};

export type UserAuth = {
    password: string;
} & User;

export type UserSlice = {
    auth_status: boolean;
} & User;
