import React from 'react';
import styles from './Magazine.module.scss';
import { useLoaderData, Await } from 'react-router';
import { nanoid } from '@reduxjs/toolkit';
import { getProcessStatus } from '../../helpers/getProcessStatus';
import { Suspense } from 'react';
import type { Application, StatusApplication } from '../../interface/file.interface';

export const Magazine = (): React.JSX.Element => {
    const { magazine } = useLoaderData() as { magazine: Application[] };

    return (
        <section>
            <h1 className={styles.magazine__title}>Журнал заявок</h1>
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
                                                .map((title) => (
                                                    <th className={styles.table__cell} key={title}>
                                                        {thead[title]}
                                                    </th>
                                                ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {magazineArray.map((itemMagazine) => (
                                            <tr className={styles.table__row} key={nanoid()}>
                                                {Object.entries(itemMagazine).map(([key, value]) => {
                                                    if (key in thead) {
                                                        if (key === 'request_processed') {
                                                            return (
                                                                <td className={styles.table__cell} key={nanoid()}>
                                                                    {getProcessStatus(value as StatusApplication)}
                                                                </td>
                                                            );
                                                        }

                                                        return (
                                                            <td className={styles.table__cell} key={nanoid()}>
                                                                {value.toString()}
                                                            </td>
                                                        );
                                                    }
                                                    return null;
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
