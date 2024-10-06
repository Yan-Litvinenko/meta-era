import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { paginationSelector } from '../../redux/selectors';
import { setPage, setCountElement } from '../../redux/slice/paginationSlice';
import { Link, useLocation } from 'react-router-dom';

export const Pagination = (): React.JSX.Element => {
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
        navigate(`/${staticPath}/1`);
    };

    return (
        <article>
            <div>
                <Link to={`/${staticPath}/${page === 1 ? page : page - 1}`} onClick={decrement}>
                    Назад
                </Link>
                <p>{page}</p>
                <Link to={`/${staticPath}/${page >= maxPage ? page : page + 1}`} onClick={increment}>
                    Вперёд
                </Link>
            </div>
            <form onSubmit={handleApplyCount}>
                Изменить кол-во элементов на странице
                <input type="number" min="1" value={count} onChange={handleCountChange} />
                <button type="submit">Применить</button>
            </form>
        </article>
    );
};
