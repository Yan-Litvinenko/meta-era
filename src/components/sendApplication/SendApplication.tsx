import React from 'react';
import styles from './SendApplication.module.scss';
import { useForm } from 'react-hook-form';
import { FileList } from '../fileList/FileList';
import { generateGUID } from '../../helpers/generateGUID';
import { useFileData } from '../../hooks/useFileData';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../redux/selectors';
import { close } from '../../redux/slice/modaSlice';
import type { SubmitHandler } from 'react-hook-form';
import type { FormSendApplication, Application } from '../../interface/application.interface';

export const SendApplication = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm<FormSendApplication>();
    const [fileData, errorFile, setFileData, handleChangeFile] = useFileData();
    const { guid } = useSelector(userSelector);

    const closeModal = () => dispatch(close('application'));

    const onSubmit: SubmitHandler<FormSendApplication> = async (data: FormSendApplication) => {
        if (!errorFile) {
            try {
                const response = await fetch('/api/new-application', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...data,
                        request_documents: fileData,
                        guid_user: guid,
                        request_guid: generateGUID(),
                        request_processed: 'IN_PROCESS',
                    } as Application),
                });

                const result = await response.json();

                if (result) {
                    navigate(location.pathname, { replace: true });
                    reset();
                    closeModal();
                    console.log('Успешно отправлена заявка');
                } else {
                    console.log('Не успешно отправлена заявка');
                }
            } catch (error) {}
        }
    };

    return (
        <article className={styles.content} onClick={closeModal}>
            <div className={styles.content__inner} onClick={(event) => event.stopPropagation()}>
                <span className={styles.content__close} onClick={closeModal}>
                    &#10006;
                </span>
                <h2 className={styles.title}>Форма отправки заявки</h2>
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
            </div>
        </article>
    );
};
