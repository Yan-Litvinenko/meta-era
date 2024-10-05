import React from 'react';
import styles from './EditApplication.module.scss';
import { useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useFileData } from '../../hooks/useFileData';
import { FileList } from '../fileList/FileList';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/selectors';
import { FormField } from '../formField/FormField';
import { loadFilesIntoInput } from '../../helpers/loadFileIntoInput';
import type { Application, FormSendApplication } from '../../interface/application.interface';

export const EditApplication = (): React.JSX.Element => {
    const { guid } = useSelector(userSelector);
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        setError,
        clearErrors,
        formState: { errors },
        handleSubmit,
    } = useForm<FormSendApplication & { request_file: string }>();

    const application = location.state?.application as Application;

    const [fileData, errorFile, setFileData, handleChangeFile] = useFileData(application.request_documents);
    const [name, setName] = React.useState(application.request_name_organization);
    const [comment, setComment] = React.useState(application.request_comment);

    const onSubmit = async (data: FormSendApplication) => {
        if (!errorFile) {
            try {
                const response = await fetch('/api/edit-application', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify([
                        {
                            ...data,
                            request_documents: fileData,
                            request_guid: application.request_guid,
                            request_processed: application.request_processed,
                        } as Application,
                        { guid_user: guid },
                    ]),
                });

                const result = await response.json();

                if (result) {
                    alert('Заявка успешно обновлена');
                } else {
                    alert('Не удалось обновить заявку');
                }
            } catch (error) {
                alert(`Ошибка при отправки редактированной заявки: ${error}`);
            }
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const files = event.target.files;

        if (files && files.length > 9) {
            setError('request_file', { message: 'Вы можете загрузить не более 10 файлов.' });
        } else {
            clearErrors('request_file');
        }

        handleChangeFile(event);
    };

    React.useEffect(() => {
        loadFilesIntoInput(fileData);
    }, []);

    return (
        <section className="page">
            <h1 className="title">Просмотр/редактирование заявки</h1>

            <form className={styles.application__form} onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    id="name"
                    textLabel="Имя организации"
                    value={name}
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
                        onChange(event) {
                            if (
                                application.request_processed === 'IN_PROCESS' ||
                                application.request_processed === 'NEW'
                            ) {
                                setName(event.target.value);
                            }
                        },
                    })}
                    error={errors.request_name_organization}
                />
                <FormField
                    id="date"
                    type="text"
                    textLabel="Дата (не изменяется)"
                    value={application.request_date}
                    register={register('request_date', {
                        required: true,
                    })}
                />
                <FormField
                    id="comment"
                    textLabel="Комментарий"
                    type="textarea"
                    value={comment}
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
                        onChange(event) {
                            if (
                                application.request_processed === 'IN_PROCESS' ||
                                application.request_processed === 'NEW'
                            ) {
                                setComment(event.target.value);
                            }
                        },
                    })}
                    error={errors.request_comment}
                />
                <FormField
                    id="file"
                    type="file"
                    textLabel="Загрузить файлы (до 10):"
                    multiple={true}
                    accept=".jpg,.jpeg,.png,.bmp,.tiff,.pdf,.doc,.docx,.rtf,.xls,.xlsx"
                    max={10}
                    onChange={() => {
                        if (application.request_processed === 'IN_PROCESS' || application.request_processed === 'NEW') {
                            handleFileChange as (
                                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                            ) => void;
                        }
                    }}
                    error={errors.request_file}
                />
                <FileList
                    files={fileData}
                    setFiles={() => {
                        if (application.request_processed === 'IN_PROCESS' || application.request_processed === 'NEW') {
                            return setFileData;
                        }
                    }}
                />
                <input className={styles.application__btn} type="submit" value={'Сохранить изменения'} />
                <input
                    className={styles.application__btn}
                    type="button"
                    value={'Вернуться назад'}
                    onClick={() => navigate(-1)}
                />
            </form>
        </section>
    );
};
