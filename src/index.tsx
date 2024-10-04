import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { App } from './components/app/App';
import { loaderMagazine } from './components/magazine/loaderMagazine';
import { Authorization } from './components/authorization/Authorization';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Magazine } from './components/magazine/Magazine';
import './css/index.scss';
import { Layout } from './components/layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} path="/">
            <Route index element={<Authorization />} />
            <Route element={<Layout />}>
                <Route index element={<Magazine />} path="magazine" loader={loaderMagazine} />
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
