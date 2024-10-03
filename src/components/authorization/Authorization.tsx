import React from 'react';
import styles from './Authorization.module.scss';
import { useAuthorization } from '../../hooks/useAuthorization';

export const Authorization = (): React.JSX.Element => {
    const [handleSubmit, onSubmit, register, errors] = useAuthorization();

    return (
        <section className={styles.auth}>
            <div className={styles.auth__inner}>
                <h1 className={styles.auth__title}>Личный кабинет</h1>
                <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)} method="POST">
                    <label className={styles.auth__label} htmlFor="name">
                        <span className={styles.auth__label_title}>Название организации</span>
                        <input
                            className={styles.auth__input}
                            id="name"
                            type="text"
                            placeholder="Введите имя"
                            {...register('name', {
                                required: true,
                                minLength: {
                                    value: 2,
                                    message: 'Имя не может быть короче двух символов',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Имя не может быть длиннее 20 символов',
                                },
                                pattern: {
                                    value: /^[A-Za-zА-ЯЁа-яё]+$/i,
                                    message: 'Имя может содержать буквы кириллицы или латинского алфавита',
                                },
                            })}
                        />
                        {errors.name?.message ? (
                            <span className={styles.auth__error}>{errors.name.message}</span>
                        ) : null}
                    </label>
                    <label className={styles.auth__label} htmlFor="password">
                        <span className={styles.auth__label_title}>Пароль</span>
                        <input
                            className={styles.auth__input}
                            id="password"
                            type="password"
                            placeholder="Введите пароль"
                            {...register('password', {
                                required: true,
                                minLength: {
                                    value: 5,
                                    message: 'Пароль не может быть короче пяти символов',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Пароль не может быть длиннее 20 символов',
                                },
                                pattern: {
                                    value: /^[A-Za-zА-ЯЁа-яё0-9]+$/i,
                                    message: 'Пароль может содержать буквы кириллицы, латинского алфавита или цифры',
                                },
                            })}
                        />
                        {errors.password?.message ? (
                            <span className={styles.auth__error}>{errors.password.message}</span>
                        ) : null}
                    </label>
                    <input className={styles.auth__submit} type="submit" value={'Войти'} />
                </form>
            </div>
        </section>
    );
};
