import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import { EditApplication } from './components/editAppplication/EditApplication';
import { Authorization } from './components/authorization/Authorization';
import { Layout } from './components/layout/Layout';
import { loaderMagazine } from './components/magazine/loaderMagazine';
import { Magazine } from './components/magazine/Magazine';
import { Provider } from 'react-redux';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import './css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} path="/">
            <Route element={<Authorization />} index />
            <Route element={<Layout />}>
                <Route element={<Magazine />} path="magazine" loader={loaderMagazine} index />
                <Route element={<EditApplication />} path="magazine/:guid" />
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
