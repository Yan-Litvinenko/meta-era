import type { RootState } from './store';

export const userSelector = (state: RootState) => state.userState.user;
