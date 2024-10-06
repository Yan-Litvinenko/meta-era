import React from 'react';
import styles from './Magazine.module.scss';
import { getProcessStatusInMagazine } from '../../helpers/getProcessStatus';
import { nanoid } from '@reduxjs/toolkit';
import { useMagazine } from '../../hooks/useMagazine';
import type { StatusApplication } from '../../interface/file.interface';
import type { Application } from '../../interface/application.interface';

export const Magazine = (): React.JSX.Element => {
    const { handleSort, toApplication, sortKey, sortOrder, application } = useMagazine();
    const thead: Partial<Record<keyof Application, string>> = {
        request_date: 'Дата',
        request_name_organization: 'Название организации',
        request_processed: 'Статус',
    };

    return (
        <section className="page">
            <h1 className="title">Журнал заявок</h1>

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
                                    {sortKey === title && <span>{sortOrder === 'asc' ? ' 🔼' : ' 🔽'}</span>}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {application.map((itemMagazine) => (
                        <tr
                            className={styles.table__row}
                            key={nanoid()}
                            onClick={() => toApplication(`${itemMagazine.request_guid}`, itemMagazine)}
                        >
                            {Object.entries(itemMagazine)
                                .sort()
                                .map(([key, value]) => {
                                    if (key in thead) {
                                        return (
                                            <td className={styles.table__cell} key={nanoid()}>
                                                {key === 'request_processed'
                                                    ? getProcessStatusInMagazine(value as StatusApplication)
                                                    : value.toString()}
                                            </td>
                                        );
                                    }
                                })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
