import { generateGUID } from '../helpers/generateGUID';
import { useFileData } from '../hooks/useFileData';
import { useForm } from 'react-hook-form';
import { close } from '../redux/slice/modaSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { userSelector } from '../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import type { SubmitHandler } from 'react-hook-form';
import type { FormSendApplication, Application } from '../interface/application.interface';

export const useSendApplication = () => {
    const [fileData, errorFile, setFileData, handleChangeFile] = useFileData();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const closeModal = () => dispatch(close('application'));
    const { guid } = useSelector(userSelector);

    const {
        register,
        reset,
        setError,
        clearErrors,
        formState: { errors },
        handleSubmit,
    } = useForm<FormSendApplication & { request_file: string }>();

    const onSubmit: SubmitHandler<FormSendApplication> = async (data: FormSendApplication) => {
        if (!errorFile) {
            try {
                const response = await fetch('/api/new-application', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        request_date: data.request_date.split('-').reverse().join('.'),
                        request_documents: fileData,
                        guid_user: guid,
                        request_guid: generateGUID(),
                        request_processed: 'IN_PROCESS',
                        request_comment: data.request_comment,
                        request_name_organization: data.request_name_organization,
                    } as Application),
                });

                const result = await response.json();

                if (result) {
                    navigate(location.pathname, { replace: true });
                    reset();
                    closeModal();
                    alert('Заявка отправлена');
                } else {
                    alert('Не удалось отправить заявку');
                }
            } catch (error) {
                alert(`Ошибка при отправлении заявки: ${error}`);
            }
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

    return {
        closeModal,
        errors,
        fileData,
        handleFileChange,
        handleSubmit,
        onSubmit,
        register,
        setFileData,
    };
};
