import React from 'react';
import { useLocation } from 'react-router';
import { useForm } from 'react-hook-form';
import { useFileData } from './useFileData';
import { userSelector } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { loadFilesIntoInput } from '../helpers/loadFileIntoInput';
import type { Application, FormSendApplication } from '../interface/application.interface';

export const useEditApplication = () => {
    const { guid } = useSelector(userSelector);
    const location = useLocation();
    const application = location.state?.application as Application;

    const {
        register,
        setError,
        clearErrors,
        formState: { errors },
        handleSubmit,
    } = useForm<FormSendApplication & { request_file: string }>();

    const [fileData, errorFile, setFileData, handleChangeFile] = useFileData(application.request_documents);
    const [name, setName] = React.useState(application.request_name_organization);
    const [comment, setComment] = React.useState(application.request_comment);

    const submitApplication = async (data: FormSendApplication) => {
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
            return result;
        } catch (error) {
            alert(`Ошибка при отправке данных: ${error}`);
        }
    };

    const onSubmit = async (data: FormSendApplication) => {
        if (errorFile) return;

        try {
            const result = await submitApplication(data);

            if (result) {
                alert('Заявка успешно обновлена');
            } else {
                alert('Не удалось обновить заявку');
            }
        } catch (error) {
            alert(error);
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
        if (fileData) {
            loadFilesIntoInput(fileData);
        }
    }, [fileData]);

    return {
        handleFileChange,
        handleSubmit,
        onSubmit,
        setName,
        setComment,
        setFileData,
        register,
        fileData,
        name,
        comment,
        errors,
        application,
    };
};
