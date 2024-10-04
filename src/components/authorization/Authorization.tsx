import React from 'react';
import styles from './Authorization.module.scss';
import { useAuthorization } from '../../hooks/useAuthorization';
import { FormField } from '../formField/FormField';

export const Authorization = (): React.JSX.Element => {
    const [handleSubmit, onSubmit, register, errors] = useAuthorization();

    return (
        <section className={styles.auth}>
            <div className={styles.auth__inner}>
                <h1 className={styles.auth__title}>Личный кабинет</h1>
                <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)} method="POST">
                    <FormField
                        id="name"
                        textLabel="Название организации"
                        type="text"
                        placeholder="Введите имя"
                        register={register('name', {
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
                        error={errors.name}
                    />
                    <FormField
                        id="password"
                        textLabel="Пароль"
                        type="password"
                        placeholder="Введите пароль"
                        register={register('password', {
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
                        error={errors.password}
                    />

                    <input className={styles.auth__submit} type="submit" value={'Войти'} />
                </form>
            </div>
        </section>
    );
};
