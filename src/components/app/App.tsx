import React from 'react';
import { Outlet } from 'react-router';

export const App = (): React.JSX.Element => {
    return (
        <div className="wrapper">
            <Outlet />
        </div>
    );
};
