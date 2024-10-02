import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import { App } from './components/app/App';
import './css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} path="/">
            <Route path="test" element={<h1>test</h1>} />
        </Route>,
    ),
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
