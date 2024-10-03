import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slice/userSlice';
import type { AppDispatch } from '../redux/store';

export const useLogout = (): void => {
    const dispatch = useDispatch<AppDispatch>();
    dispatch(setUser({ name: '', auth_status: false }));
};
