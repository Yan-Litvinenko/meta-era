import React from 'react';
import styles from './App.module.scss';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import type { User } from '../../interface/auth.interface';

const App = (): React.JSX.Element => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<User>();

    const onSubmit: SubmitHandler<User> = async (data: User): Promise<void> => {
        try {
            const response: Response = await fetch('/authorization', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result: boolean = await response.json();

            if (result) {
                console.log(
                    'Успешная авторизация. Показываем форму добавления',
                );
            } else {
                console.log('Не успешная авторизация');
            }
        } catch (error) {
            console.error('Error authorization:', error);
        }
    };

    return (
        <div className="wrapper">
            <section className={styles.auth}>
                <div className={styles.auth__inner}>
                    <h1 className={styles.auth__title}>Личный кабинет</h1>
                    <form
                        className={styles.auth__form}
                        onSubmit={handleSubmit(onSubmit)}
                        method="POST"
                    >
                        <label className={styles.auth__label}>
                            <span className={styles.auth__label_title}>
                                Имя пользователя
                            </span>
                            <input
                                className={styles.auth__input}
                                type="text"
                                placeholder="Введите имя"
                                {...register('name', {
                                    required: true,
                                    minLength: {
                                        value: 2,
                                        message:
                                            'Имя не может быть короче двух символов',
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            'Имя не может быть длиннее 20 символов',
                                    },
                                    pattern: {
                                        value: /^[A-Za-zА-ЯЁа-яё]+$/i,
                                        message:
                                            'Имя может содержать буквы кириллицы или латинского алфавита',
                                    },
                                })}
                            />
                            {errors.name?.message ? (
                                <span className={styles.auth__error}>
                                    {errors.name.message}
                                </span>
                            ) : null}
                        </label>
                        <label className={styles.auth__label}>
                            <span className={styles.auth__label_title}>
                                Пароль
                            </span>
                            <input
                                className={styles.auth__input}
                                type="password"
                                placeholder="Введите пароль"
                                {...register('password', {
                                    required: true,
                                    minLength: {
                                        value: 5,
                                        message:
                                            'Пароль не может быть короче пяти символов',
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            'Пароль не может быть длиннее 20 символов',
                                    },
                                    pattern: {
                                        value: /^[A-Za-zА-ЯЁа-яё0-9]+$/i,
                                        message:
                                            'Пароль может содержать буквы кириллицы, латинского алфавита или цифры',
                                    },
                                })}
                            />
                            {errors.password?.message ? (
                                <span className={styles.auth__error}>
                                    {errors.password.message}
                                </span>
                            ) : null}
                        </label>
                        <input
                            className={styles.auth__submit}
                            type="submit"
                            value={'Войти'}
                        />
                    </form>
                </div>
            </section>
        </div>
    );
};

export { App };
