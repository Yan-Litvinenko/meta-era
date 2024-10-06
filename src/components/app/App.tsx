import React from 'react';
import { Outlet } from 'react-router';

export const App = (): React.JSX.Element => {
    return (
        <div
            style={{
                margin: '0 auto',
                maxWidth: '1400px',
                padding: '0px 20px',
                width: '100%',
                minHeight: '100vh',
            }}
        >
            <Outlet />
        </div>
    );
};
