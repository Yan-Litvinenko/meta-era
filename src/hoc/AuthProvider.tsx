import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/selectors';
import { useNavigate } from 'react-router';

export const AuthProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    const { name } = useSelector(userSelector);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!name) {
            navigate('/');
        }
    }, [name]);

    return <>{children}</>;
};
