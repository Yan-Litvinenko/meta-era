import React from 'react';
import styles from './Magazine.module.scss';
import { useLoaderData, Await, useNavigate } from 'react-router';
import { nanoid } from '@reduxjs/toolkit';
import { getProcessStatusInMagazine } from '../../helpers/getProcessStatus';
import { useFilter } from '../../hooks/useFilter';
import { Suspense } from 'react';
import type { StatusApplication } from '../../interface/file.interface';
import type { Application } from '../../interface/application.interface';

export const Magazine = (): React.JSX.Element => {
    const { magazine } = useLoaderData() as { magazine: Application[] };
    const navigate = useNavigate();

    const [sortKey, setSortKey] = React.useState<keyof Application | null>(null);
    const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc');

    const toApplication = (url: string, application: Application) => {
        navigate(url, { state: { application } });
    };

    const filter = useFilter();

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

    return (
        <section className="page">
            <h1 className="title">Журнал заявок</h1>
            <Suspense fallback={<div>Загрузка журнала заявок...</div>}>
                <Await resolve={magazine}>
                    {(resolveMagazine: { magazine: Application[] } | false) => {
                        if (resolveMagazine) {
                            let magazineArray: Application[] = filter(resolveMagazine.magazine);

                            if (sortKey) {
                                magazineArray = sortArray(magazineArray, sortKey, sortOrder);
                            }

                            const thead: Partial<Record<keyof Application, string>> = {
                                request_date: 'Дата',
                                request_name_organization: 'Название организации',
                                request_processed: 'Статус',
                            };

                            return (
                                <table className={styles.table}>
                                    <thead>
                                        <tr className={styles.table__row}>
                                            {(Object.keys(thead) as Array<keyof typeof thead>)
                                                .filter((key) => key in thead)
                                                .sort()
                                                .map((title) => (
                                                    <th
                                                        className={styles.table__cell}
                                                        key={title}
                                                        onClick={() => handleSort(title)}
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        {thead[title]}
                                                        {sortKey === title && (
                                                            <span>{sortOrder === 'asc' ? ' 🔼' : ' 🔽'}</span>
                                                        )}
                                                    </th>
                                                ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {magazineArray.map((itemMagazine) => (
                                            <tr
                                                className={styles.table__row}
                                                key={nanoid()}
                                                onClick={() => toApplication(itemMagazine.request_guid, itemMagazine)}
                                            >
                                                {Object.entries(itemMagazine)
                                                    .sort()
                                                    .map(([key, value]) => {
                                                        if (key in thead) {
                                                            return (
                                                                <td className={styles.table__cell} key={nanoid()}>
                                                                    {key === 'request_processed'
                                                                        ? getProcessStatusInMagazine(
                                                                              value as StatusApplication,
                                                                          )
                                                                        : value.toString()}
                                                                </td>
                                                            );
                                                        }
                                                    })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            );
                        }
                    }}
                </Await>
            </Suspense>
        </section>
    );
};
