import { useForm } from 'react-hook-form';
import type { UserAuth } from '../interface/auth.interface';
import type { SubmitHandler, UseFormHandleSubmit, UseFormRegister, FieldErrors } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUser } from '../redux/slice/userSlice';
import type { AppDispatch } from '../redux/store';

type UseAuthorization = [
    UseFormHandleSubmit<UserAuth, undefined>,
    SubmitHandler<UserAuth>,
    UseFormRegister<UserAuth>,
    FieldErrors<UserAuth>,
];

export const useAuthorization = (): UseAuthorization => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<UserAuth>();

    const onSubmit: SubmitHandler<UserAuth> = async (data: UserAuth): Promise<void> => {
        event?.preventDefault();
        try {
            const response: Response = await fetch('/api/authorization', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result: boolean = await response.json();

            if (result) {
                dispatch(setUser({ name: data.name, auth_status: true }));
                navigate('send-application');
            } else {
                console.log('Не успешная авторизация');
            }
            reset();
        } catch (error) {
            console.error('Error authorization:', error);
        }
    };

    return [handleSubmit, onSubmit, register, errors];
};
