import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { App } from './components/app/App';
import { loaderMagazine } from './components/magazine/loaderMagazine';
import { Authorization } from './components/authorization/Authorization';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Magazine } from './components/magazine/Magazine';
import { SendApplication } from './components/sendApplication/SendApplication';
import './css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} path="/">
            <Route index element={<Authorization />} />
            <Route element={<SendApplication />} path="send-application" />
            <Route element={<Magazine />} path="magazine" loader={loaderMagazine} />
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
