import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserSlice } from '../../interface/slice.interface';

const initialState: UserSlice = {
    name: '',
    guid: '',
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
                guid: action.payload.guid,
            };
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
