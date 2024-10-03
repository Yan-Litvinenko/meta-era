import React from 'react';
import styles from './SendApplication.module.scss';
import { useForm } from 'react-hook-form';
// import { generateGUID } from '../../helpers/generateUUID';
import { FileList } from '../fileList/FileList';
import { useFileData } from '../../hooks/useFileData';
import type { SubmitHandler } from 'react-hook-form';
import type { FormSendApplication } from '../../interface/file.interface';

export const SendApplication = (): React.JSX.Element => {
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm<FormSendApplication>();
    const [fileData, errorFile, setFileData, handleChangeFile] = useFileData();

    const onSubmit: SubmitHandler<FormSendApplication> = async (data: FormSendApplication) => {
        if (!errorFile) {
            try {
                // const response = await fetch('/api/send-application');
                console.log(`data: ${JSON.stringify(data)}`);
                console.log(`fileData: ${JSON.stringify(fileData)}`);
                // const application: NewApplication = {
                //     ...data,
                //     request_documents: [...fileData],
                //     request_guid: generateGUID(),
                //     request_processed: false,
                // };
                reset();
            } catch (error) {}
        }
    };

    return (
        <section className={styles.content}>
            <h1 className={styles.title}>Форма отправки документа</h1>
            <form className={styles.form} method="POST" onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.form__label} htmlFor="name">
                    <span>Имя организации</span>
                    <input
                        className={styles.form__input}
                        id="name"
                        type="text"
                        {...register('request_name_organization', {
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
                    />
                    {errors.request_name_organization?.message ? (
                        <span>{errors.request_name_organization.message}</span>
                    ) : null}
                </label>
                <label className={styles.form__label} htmlFor="date">
                    <span>Дата заявки</span>
                    <input
                        className={styles.form__input}
                        id="date"
                        type="date"
                        {...register('request_date', {
                            required: true,
                        })}
                    />
                </label>
                <label className={styles.form__label} htmlFor="comment">
                    <span>Комментарий</span>
                    <textarea
                        className={styles.form__input}
                        id="comment"
                        placeholder="Напишите комментарий"
                        {...register('request_comment', {
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
                    />
                    {errors.request_comment?.message ? <span>{errors.request_comment.message}</span> : null}
                </label>
                <label className={styles.form__label}>
                    <span>Загрузить файлы (до 10):</span>
                    <input
                        className={styles.form__input}
                        type="file"
                        multiple
                        accept=".jpg,.jpeg,.png,.bmp,.tiff,.pdf,.doc,.docx,.rtf,.xls,.xlsx"
                        required={true}
                        max="10"
                        onChange={handleChangeFile}
                    />
                    {fileData.length === 9 ? <span>Достигнуто максимальное количество файлов</span> : null}
                </label>
                <FileList files={fileData} setFiles={setFileData} />
                <input className={styles.form__btn} type="submit" value={'Отправить'} />
            </form>
        </section>
    );
};
