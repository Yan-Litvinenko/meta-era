import React from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

export const Header = (): React.JSX.Element => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.nav__item}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active_link : '')}
                            to={'/send-application'}
                        >
                            Отправить документ
                        </NavLink>
                    </li>
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
