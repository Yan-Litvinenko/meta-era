import { generateGUID } from '../helpers/generateGUID';
import { setUser } from '../redux/slice/userSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import type { AppDispatch } from '../redux/store';
import type { SubmitHandler, UseFormHandleSubmit, UseFormRegister, FieldErrors } from 'react-hook-form';
import type { UserAuth } from '../interface/auth.interface';

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
        const guid: string = generateGUID();
        try {
            const response: Response = await fetch('/api/authorization', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, guid }),
            });

            const result = await response.json();

            if (result?.status) {
                dispatch(setUser({ name: data.name, guid: result?.guid || guid }));
                navigate('/magazine/1');
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
