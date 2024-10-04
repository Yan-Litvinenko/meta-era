import React from 'react';
import styles from './SendApplication.module.scss';
import { useSendApplication } from '../../hooks/useSendApplication';
import { FileList } from '../fileList/FileList';
import { FormField } from '../formField/FormField';

export const SendApplication = (): React.JSX.Element => {
    const { errors, closeModal, register, handleSubmit, fileData, setFileData, onSubmit, handleFileChange } =
        useSendApplication();

    return (
        <article className={styles.content} onClick={closeModal}>
            <div className={styles.content__inner} onClick={(event) => event.stopPropagation()}>
                <span className={styles.content__close} onClick={closeModal}>
                    &#10006;
                </span>
                <h2 className={styles.title}>Форма отправки заявки</h2>
                <form className={styles.form} method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <FormField
                        id="name"
                        textLabel="Имя организации"
                        type="text"
                        register={register('request_name_organization', {
                            required: true,
                            minLength: {
                                value: 2,
                                message: 'Название не может быть короче двух символов',
                            },
                            maxLength: {
                                value: 20,
                                message: 'Название не может быть длиннее 20 символов',
                            },
                        })}
                        error={errors.request_name_organization}
                    />
                    <FormField
                        id="date"
                        textLabel="Дата заявки"
                        type="date"
                        register={register('request_date', {
                            required: true,
                        })}
                        error={errors.request_date}
                    />
                    <FormField
                        id="comment"
                        type="textarea"
                        textLabel="Комментарий"
                        placeholder="Напишите комментарий"
                        register={register('request_comment', {
                            required: true,
                            minLength: {
                                value: 10,
                                message: 'Комментарий не может быть меньше 10 символов',
                            },
                            maxLength: {
                                value: 1000,
                                message: 'Комментарий не может быть длиннее 1000 символов',
                            },
                        })}
                        error={errors.request_comment}
                    />
                    <FormField
                        id="file"
                        textLabel="загрузить файлы"
                        type="file"
                        multiple={true}
                        max={10}
                        onChange={
                            handleFileChange as (
                                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                            ) => void
                        }
                        error={errors.request_file}
                    />

                    <FileList files={fileData} setFiles={setFileData} />
                    <input className={styles.form__btn} type="submit" value={'Отправить'} />
                </form>
            </div>
        </article>
    );
};
