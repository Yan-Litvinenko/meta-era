import type { RootState } from './store';

export const userSelector = (state: RootState) => state.userState.user;
export const modalSelector = (state: RootState) => state.modalState.modal;
export const filterSelector = (state: RootState) => state.filterState;
export const paginationSelector = (state: RootState) => state.paginationState;
export const triggerSelector = (state: RootState) => state.triggerState;
