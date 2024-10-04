import React from 'react';
import { Header } from '../header/Header';
import { Outlet } from 'react-router';
import { AuthProvider } from '../../hoc/AuthProvider';
import { SendApplication } from '../sendApplication/SendApplication';
import { modalSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const Layout = (): React.JSX.Element => {
    const { application } = useSelector(modalSelector);

    return (
        <>
            <AuthProvider>
                <Header />
                <Outlet />
            </AuthProvider>
            {application ? <SendApplication /> : null}
        </>
    );
};
