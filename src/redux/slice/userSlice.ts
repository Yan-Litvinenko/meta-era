import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSlice } from '../../interface/auth.interface';
import type { Application } from '../../interface/file.interface';

const initialState: UserSlice = {
    name: '',
    guid: '',
    magazine: [],
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
                magazine: action.payload.magazine,
            };
        },
        setMagazine(state, action: PayloadAction<Application[]>) {
            state.user.magazine = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
