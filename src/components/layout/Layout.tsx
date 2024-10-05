import React from 'react';
import { Header } from '../header/Header';
import { Outlet } from 'react-router';
import { AuthProvider } from '../../hoc/AuthProvider';
import { SendApplication } from '../sendApplication/SendApplication';
import { modalSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { FilterPanel } from '../filterPanel/FilterPanel';

export const Layout = (): React.JSX.Element => {
    const { application } = useSelector(modalSelector);

    return (
        <>
            <AuthProvider>
                <Header />
                <FilterPanel />
                <Outlet />
            </AuthProvider>
            {application ? <SendApplication /> : null}
        </>
    );
};
