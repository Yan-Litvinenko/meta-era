import userSlice from './slice/userSlice';
import modalSlice from './slice/modalSlice';
import filterSlice from './slice/filterSlice';
import triggerSlice from './slice/triggerSlice';
import paginationSlice from './slice/paginationSlice';
import { configureStore } from '@reduxjs/toolkit';
import type { Action, ThunkAction } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        userState: userSlice,
        modalState: modalSlice,
        filterState: filterSlice,
        paginationState: paginationSlice,
        triggerState: triggerSlice,
    },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
