import React from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { open } from '../../redux/slice/modaSlice';

export const Header = (): React.JSX.Element => {
    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.nav__item}></li>
                    <li className={styles.nav__item}>
                        <NavLink className={({ isActive }) => (isActive ? styles.active_link : '')} to={'/magazine'}>
                            Журнал заявок
                        </NavLink>
                    </li>
                    <li className={styles.nav__item}>
                        <NavLink className={({ isActive }) => (isActive ? styles.active_link : '')} to={'/archive'}>
                            Архив документов
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
                <span className={styles.account__name}>Ян</span>
                <ul className={styles.account__list}>
                    <li className={styles.account__item}>
                        <Link to={'/'}>Выход</Link>
                    </li>
                </ul>
            </article>
        </header>
    );
};
