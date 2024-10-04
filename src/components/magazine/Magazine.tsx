import React from 'react';
import styles from './Magazine.module.scss';
import { useLoaderData, Await, useNavigate } from 'react-router';
import { nanoid } from '@reduxjs/toolkit';
import { getProcessStatus } from '../../helpers/getProcessStatus';
import { Suspense } from 'react';
import type { StatusApplication } from '../../interface/file.interface';
import type { Application } from '../../interface/application.interface';

export const Magazine = (): React.JSX.Element => {
    const { magazine } = useLoaderData() as { magazine: Application[] };
    const navigate = useNavigate();

    const toApplication = (url: string, application: Application) => {
        navigate(url, { state: { application } });
    };

    return (
        <section className="page">
            <h1 className="title">Журнал заявок</h1>
            <Suspense fallback={<div>Загрузка журнала заявок...</div>}>
                <Await resolve={magazine}>
                    {(resolveMagazine: { magazine: Application[] } | false) => {
                        if (resolveMagazine) {
                            const magazineArray: Application[] = resolveMagazine.magazine;
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
                                                    <th className={styles.table__cell} key={title}>
                                                        {thead[title]}
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
                                                                        ? getProcessStatus(value as StatusApplication)
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
