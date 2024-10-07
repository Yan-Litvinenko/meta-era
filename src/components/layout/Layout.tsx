import React from 'react';
import { Header } from '../header/Header';
import { Outlet, useLocation } from 'react-router';
import { AuthProvider } from '../../hoc/AuthProvider';
import { SendApplication } from '../sendApplication/SendApplication';
import { modalSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { FilterPanel } from '../filterPanel/FilterPanel';
import { Pagination } from '../pagination/Pagination';

export const Layout = (): React.JSX.Element => {
    const location = useLocation();
    const { application } = useSelector(modalSelector);
    const isApplicationItemPath: boolean = location.pathname.slice(1).split('/').length === 3;

    return (
        <>
            <AuthProvider>
                <Header />
                {isApplicationItemPath ? null : <FilterPanel />}
                <Outlet />
                {isApplicationItemPath ? null : <Pagination />}
            </AuthProvider>
            {application ? <SendApplication /> : null}
        </>
    );
};
