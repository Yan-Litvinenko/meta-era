import React from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { open } from '../../redux/slice/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/slice/paginationSlice';
import { userSelector } from '../../redux/selectors';
import { setTrigger } from '../../redux/slice/triggerSlice';

export const Header = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const { name } = useSelector(userSelector);

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.nav__item}></li>
                    <li className={styles.nav__item}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active_link : '')}
                            onClick={() => {
                                dispatch(setPage(1));
                                dispatch(setTrigger());
                            }}
                            to={'/magazine/1'}
                        >
                            Журнал заявок
                        </NavLink>
                    </li>
                    <li className={styles.nav__item}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active_link : '')}
                            onClick={() => {
                                dispatch(setPage(1));
                                dispatch(setTrigger());
                            }}
                            to={'/archive/1'}
                        >
                            Архив заявок
                        </NavLink>
                    </li>
                    <li onClick={() => dispatch(open('application'))}>
                        <button className={styles.nav__btn} type="button">
                            Создать заявку
                        </button>
                    </li>
                </ul>
            </nav>
            <article className={styles.account}>
                <span className={styles.account__name}>{name[0].toUpperCase()}</span>
                <ul className={styles.account__list}>
                    <li className={styles.account__item}>
                        <Link to={'/'}>Выход</Link>
                    </li>
                </ul>
            </article>
        </header>
    );
};
