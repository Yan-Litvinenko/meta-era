import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserSlice } from '../../interface/slice.interface';
import type { Application } from '../../interface/application.interface';

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
