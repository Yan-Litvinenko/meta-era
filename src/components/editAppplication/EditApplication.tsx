import React from 'react';
import styles from './EditApplication.module.scss';
import { useNavigate } from 'react-router';
import { FormField } from '../formField/FormField';
import { FileList } from '../fileList/FileList';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/selectors';
import { useEditApplication } from '../../hooks/useEditApplication';

export const EditApplication = (): React.JSX.Element => {
    const navigate = useNavigate();
    const { guid } = useSelector(userSelector);
    const editApplication = useEditApplication();

    return (
        <section className="page">
            <h1 className="title">Просмотр/редактирование заявки</h1>

            <form
                className={styles.application__form}
                onSubmit={editApplication.handleSubmit(editApplication.onSubmit)}
            >
                {editApplication.application.request_processed === 'IN_PROCESS' ? (
                    <span
                        onClick={async () => {
                            alert('click');
                            const response = await fetch(
                                `/api/delete/${guid}/${editApplication.application.request_guid}`,
                                {
                                    method: 'DELETE',
                                },
                            );

                            const result = await response.json();

                            alert(result);

                            if (result) {
                                alert('Заявка удалена');
                            } else {
                                alert('Ошибка удаления');
                            }
                        }}
                    >
                        Удалить
                    </span>
                ) : null}
                <FormField
                    id="name"
                    textLabel="Имя организации"
                    value={editApplication.name}
                    type="text"
                    register={editApplication.register('request_name_organization', {
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
                                editApplication.application.request_processed === 'IN_PROCESS' ||
                                editApplication.application.request_processed === 'NEW'
                            ) {
                                editApplication.setName(event.target.value);
                            }
                        },
                    })}
                    error={editApplication.errors.request_name_organization}
                />
                <FormField
                    id="date"
                    type="text"
                    textLabel="Дата (не изменяется)"
                    value={editApplication.application.request_date}
                    register={editApplication.register('request_date', {
                        required: true,
                    })}
                />
                <FormField
                    id="comment"
                    textLabel="Комментарий"
                    type="textarea"
                    value={editApplication.comment}
                    register={editApplication.register('request_comment', {
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
                                editApplication.application.request_processed === 'IN_PROCESS' ||
                                editApplication.application.request_processed === 'NEW'
                            ) {
                                editApplication.setComment(event.target.value);
                            }
                        },
                    })}
                    error={editApplication.errors.request_comment}
                />
                <FormField
                    id="file"
                    type="file"
                    textLabel="Загрузить файлы (до 10):"
                    multiple={true}
                    accept=".jpg,.jpeg,.png,.bmp,.tiff,.pdf,.doc,.docx,.rtf,.xls,.xlsx"
                    max={10}
                    onChange={() => {
                        if (
                            editApplication.application.request_processed === 'IN_PROCESS' ||
                            editApplication.application.request_processed === 'NEW'
                        ) {
                            editApplication.handleFileChange as (
                                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                            ) => void;
                        }
                    }}
                    error={editApplication.errors.request_file}
                />
                <FileList
                    files={editApplication.fileData}
                    setFiles={() => {
                        if (
                            editApplication.application.request_processed === 'IN_PROCESS' ||
                            editApplication.application.request_processed === 'NEW'
                        ) {
                            return editApplication.setFileData;
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
