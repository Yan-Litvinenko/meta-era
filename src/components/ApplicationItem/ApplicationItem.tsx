import React from 'react';
import styles from './ApplicationItem.module.scss';
import { useNavigate } from 'react-router';
import { FormField } from '../formField/FormField';
import { FileList } from '../fileList/FileList';
import { useApplicationElement } from '../../hooks/useApplicationElement';
import { useDeleteApplication } from '../../hooks/useDeleteApplication';
import { getProcessStatus } from '../../helpers/getProcessStatus';
import { ArchiveRecording } from '../../interface/archive.interface';

export const ApplicationItem = (): React.JSX.Element => {
    const navigate = useNavigate();
    const applicationElement = useApplicationElement();
    const deleteApplication = useDeleteApplication(applicationElement.application.request_guid);
    const isArchive = applicationElement.isArchive as Boolean;

    return (
        <section className={styles.application}>
            <h1 className="title">Просмотр/редактирование заявки</h1>

            <form
                className={styles.application__form}
                onSubmit={applicationElement.handleSubmit(applicationElement.onSubmit)}
            >
                <h2>
                    Статус:
                    {getProcessStatus(
                        isArchive
                            ? (applicationElement.application as ArchiveRecording).record_status
                            : applicationElement.application.request_processed,
                    )}
                </h2>
                <FormField
                    id="name"
                    textLabel="Имя организации"
                    value={
                        isArchive
                            ? (applicationElement.application as ArchiveRecording).organization_name
                            : applicationElement.name
                    }
                    type="text"
                    register={applicationElement.register('request_name_organization', {
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
                                applicationElement.application.request_processed === 'IN_PROCESS' ||
                                applicationElement.application.request_processed === 'NEW'
                            ) {
                                applicationElement.setName(event.target.value);
                            }
                        },
                    })}
                    error={applicationElement.errors.request_name_organization}
                />
                <FormField
                    id="date"
                    type="text"
                    textLabel="Дата"
                    value={
                        isArchive
                            ? (applicationElement.application as ArchiveRecording).record_date
                            : applicationElement.application.request_date
                    }
                    register={applicationElement.register('request_date', {
                        required: true,
                    })}
                />
                <FormField
                    id="comment"
                    textLabel="Комментарий"
                    type="textarea"
                    value={
                        isArchive
                            ? (applicationElement.application as ArchiveRecording).record_comment
                            : applicationElement.application.request_comment
                    }
                    register={applicationElement.register('request_comment', {
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
                                applicationElement.application.request_processed === 'IN_PROCESS' ||
                                applicationElement.application.request_processed === 'NEW'
                            ) {
                                applicationElement.setComment(event.target.value);
                            }
                        },
                    })}
                    error={applicationElement.errors.request_comment}
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
                            applicationElement.application.request_processed === 'IN_PROCESS' ||
                            applicationElement.application.request_processed === 'NEW'
                        ) {
                            applicationElement.handleFileChange as (
                                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                            ) => void;
                        }
                    }}
                    error={applicationElement.errors.request_file}
                />

                <FileList
                    files={
                        isArchive
                            ? (applicationElement.application as ArchiveRecording).fileList
                            : applicationElement.fileData
                    }
                    setFiles={() => {
                        if (
                            applicationElement.application.request_processed === 'IN_PROCESS' ||
                            applicationElement.application.request_processed === 'NEW'
                        ) {
                            return applicationElement.setFileData;
                        }
                    }}
                />
                {isArchive ? null : (
                    <input className={styles.application__btn} type="submit" value={'Сохранить изменения'} />
                )}

                <input
                    className={styles.application__btn}
                    type="button"
                    value={'Вернуться назад'}
                    onClick={() => navigate(-1)}
                />
                {applicationElement.application.request_processed === 'IN_PROCESS' ? (
                    <span className={styles.application__delete} onClick={deleteApplication}>
                        Удалить заявку
                    </span>
                ) : null}
            </form>
        </section>
    );
};
