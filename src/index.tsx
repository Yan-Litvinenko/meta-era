import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import { ApplicationItem } from './components/ApplicationItem/ApplicationItem';
import { Authorization } from './components/authorization/Authorization';
import { Layout } from './components/layout/Layout';
import { Magazine } from './components/magazine/Magazine';
import { Provider } from 'react-redux';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import { Archive } from './components/archive/Archive';
import './css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} path="/">
            <Route element={<Authorization />} index />
            <Route element={<Layout />}>
                <Route element={<Magazine />} path="magazine/:page" index />
                <Route element={<Archive />} path="archive/:page" />
                <Route element={<ApplicationItem />} path="magazine/:page/:guid" />
                <Route element={<ApplicationItem />} path="archive/:page/:guid" />
                {/* Я знаю, правильно было бы сделать 3 динамичных элемента */}
            </Route>
        </Route>,
    ),
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
