import React from 'react';
import { usePagination } from '../../hooks/usePagination';
import { Link } from 'react-router-dom';

export const Pagination = (): React.JSX.Element => {
    const { increment, decrement, staticPath, handleApplyCount, handleCountChange, page, maxPage, count } =
        usePagination();

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
