import React from 'react';
import styles from './SendApplication.module.scss';
import { close } from '../../redux/slice/modaSlice';
import { FileList } from '../fileList/FileList';
import { FormField } from '../formField/FormField';
import { generateGUID } from '../../helpers/generateGUID';
import { useFileData } from '../../hooks/useFileData';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { userSelector } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import type { SubmitHandler } from 'react-hook-form';
import type { FormSendApplication, Application } from '../../interface/application.interface';

export const SendApplication = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        reset,
        setError,
        clearErrors,
        formState: { errors },
        handleSubmit,
    } = useForm<FormSendApplication & { request_file: string }>();
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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 9) {
            setError('request_file', { message: 'Вы можете загрузить не более 10 файлов.' });
        } else {
            clearErrors('request_file');
        }

        handleChangeFile(event);
    };

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
