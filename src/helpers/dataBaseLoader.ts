import { defer } from 'react-router';

const loadDataBase = async () => {
    const response = await fetch('/api/getDataBase');
    return response.json();
};

export const loaderDataBase = () => {
    return defer({
        dataBase: loadDataBase(),
    });
};
