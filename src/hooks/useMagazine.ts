import React from 'react';
import { useFilter } from '../hooks/useFilter';
import { loadMagazine } from '../helpers/loaderMagazine';
import { useNavigate } from 'react-router';
import { setMaxPage } from '../redux/slice/paginationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { paginationSelector } from '../redux/selectors';
import type { Application } from '../interface/application.interface';

export const useMagazine = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const filter = useFilter();
    const { page } = useSelector(paginationSelector);

    const [application, setApplication] = React.useState<Application[]>([]);
    const [sortKey, setSortKey] = React.useState<keyof Application | null>(null);
    const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc');

    const toApplication = (url: string, applicationItem: Application) => {
        navigate(url, { state: { application: applicationItem } });
    };

    const sortArray = (array: Application[], key: keyof Application, order: 'asc' | 'desc') => {
        return array.sort((a, b) => {
            const aValue = a[key];
            const bValue = b[key];

            if (aValue < bValue) return order === 'asc' ? -1 : 1;
            if (aValue > bValue) return order === 'asc' ? 1 : -1;
            return 0;
        });
    };

    const handleSort = (key: keyof Application) => {
        if (sortKey === key) {
            setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };

    React.useEffect(() => {
        (async () => {
            const response = (await loadMagazine()) as { magazine: Application[]; maxPage: number };
            let resolveApplication = filter(response.magazine);

            if (sortKey) {
                resolveApplication = sortArray(resolveApplication, sortKey, sortOrder);
            }

            setApplication(resolveApplication);
            dispatch(setMaxPage(response.maxPage));
        })();
    }, [page]);

    return {
        application,
        handleSort,
        toApplication,
        sortKey,
        sortOrder,
    };
};
