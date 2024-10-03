import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/selectors';
import { useNavigate } from 'react-router';

export const AuthProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    const { auth_status, name } = useSelector(userSelector);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!auth_status || !name) {
            navigate('/');
        }
    }, [auth_status, name]);

    return <>{children}</>;
};
