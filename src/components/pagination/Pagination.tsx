import React from 'react';
import styles from './Pagination.module.scss';
import { usePagination } from '../../hooks/usePagination';
import { Link } from 'react-router-dom';

export const Pagination = (): React.JSX.Element => {
    const { increment, decrement, staticPath, handleApplyCount, handleCountChange, page, maxPage, count } =
        usePagination();

    return (
        <article className={styles.pagination}>
            <div className={styles.pagination__pages}>
                <Link
                    className={styles.pagination__switch}
                    to={`/${staticPath}/${page === 1 ? page : page - 1}`}
                    onClick={decrement}
                >
                    Назад
                </Link>
                <p className={styles.pagination__page}>{page}</p>
                <Link
                    className={styles.pagination__switch}
                    to={`/${staticPath}/${page >= maxPage ? page : page + 1}`}
                    onClick={increment}
                >
                    Вперёд
                </Link>
            </div>
            <form className={styles.change} onSubmit={handleApplyCount}>
                <p>Изменить кол-во элементов на странице</p>
                <input type="number" min="1" value={count} onChange={handleCountChange} />
                <button className={styles.change__btn} type="submit">
                    Применить
                </button>
            </form>
        </article>
    );
};
