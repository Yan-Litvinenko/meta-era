import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { paginationSelector } from '../redux/selectors';
import { setPage, setCountElement } from '../redux/slice/paginationSlice';
import { useLocation } from 'react-router-dom';
import { setTrigger } from '../redux/slice/triggerSlice';

export const usePagination = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const { countElements, page, maxPage } = useSelector(paginationSelector);
    const [count, setCount] = React.useState<number>(countElements);
    const staticPath: string = location.pathname.split('/')[1];

    const increment = (): void => {
        if (page >= maxPage) {
            return;
        }
        dispatch(setPage(page + 1));
    };

    const decrement = (): void => {
        if (page === 1) {
            return;
        }
        dispatch(setPage(page - 1));
    };

    const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value: number = Number(event.target.value);

        if (!isNaN(value) && value > 0) {
            setCount(value);
        } else {
            setCount(1);
        }
    };

    const handleApplyCount = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch(setCountElement(count));
        dispatch(setPage(1));
        dispatch(setTrigger());
        navigate(`/${staticPath}/1`);
    };

    return { increment, decrement, handleApplyCount, handleCountChange, staticPath, page, maxPage, count };
};
