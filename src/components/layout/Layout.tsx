import React from 'react';
import { Header } from '../header/Header';
import { Outlet, useLocation } from 'react-router';
import { AuthProvider } from '../../hoc/AuthProvider';

export const Layout = (): React.JSX.Element => {
    const location = useLocation();

    if (location.pathname === '/') {
        return <Outlet />;
    }

    return (
        <>
            <AuthProvider>
                <Header />
                <Outlet />
            </AuthProvider>
        </>
    );
};
