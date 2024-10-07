import { createSlice } from '@reduxjs/toolkit';
import type { ModalSlice } from '../../interface/slice.interface';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Modal } from '../../interface/interface';

const initialState: ModalSlice = {
    modal: {
        application: false,
    },
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open(state, action: PayloadAction<Modal>) {
            state.modal[action.payload] = true;
        },
        close(state, action: PayloadAction<Modal>) {
            state.modal[action.payload] = false;
        },
    },
});

export const { close, open } = modalSlice.actions;
export default modalSlice.reducer;
