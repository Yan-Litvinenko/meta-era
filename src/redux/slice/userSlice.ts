import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSlice } from '../../interface/auth.interface';

const initialState: UserSlice = {
    name: '',
    auth_status: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: initialState,
    },
    reducers: {
        setUser(state, action: PayloadAction<UserSlice>) {
            state.user = {
                name: action.payload.name,
                auth_status: action.payload.auth_status,
            };
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
