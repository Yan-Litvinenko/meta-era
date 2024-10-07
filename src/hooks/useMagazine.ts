import React from 'react';
import { useFilter } from '../hooks/useFilter';
import { loadMagazine } from '../helpers/loaderMagazine';
import { setMaxPage } from '../redux/slice/paginationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { paginationSelector, triggerSelector } from '../redux/selectors';
import type { Application } from '../interface/application.interface';

export const useMagazine = () => {
    const dispatch = useDispatch();
    const filter = useFilter('magazine');
    const { page } = useSelector(paginationSelector);
    const { trigger } = useSelector(triggerSelector);

    const [application, setApplication] = React.useState<Application[]>([]);
    const [sortKey, setSortKey] = React.useState<keyof Application | null>(null);
    const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc');

    const sortArray = (array: Application[], key: keyof Application, order: 'asc' | 'desc') => {
        return [...array].sort((a, b) => {
            const aValue = a[key];
            const bValue = b[key];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            }

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
            let resolveApplication = response.magazine;

            if (sortKey) {
                resolveApplication = sortArray(resolveApplication as Application[], sortKey, sortOrder);
            }

            setApplication(resolveApplication as Application[]);
            dispatch(setMaxPage(response.maxPage));
        })();
    }, [page, sortKey, sortOrder, trigger]);

    return {
        application,
        handleSort,
        sortKey,
        filter,
        sortOrder,
    };
};
