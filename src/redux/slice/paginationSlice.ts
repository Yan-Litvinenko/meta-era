import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaginationSlice } from '../../interface/slice.interface';

const initialState: PaginationSlice = {
    page: 1,
    countElements: 5,
    maxPage: 0,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setCountElement(state, action: PayloadAction<number>) {
            state.countElements = action.payload;
        },
        setMaxPage(state, action: PayloadAction<number>) {
            state.maxPage = action.payload;
        },
    },
});

export const { setCountElement, setPage, setMaxPage } = paginationSlice.actions;
export default paginationSlice.reducer;
