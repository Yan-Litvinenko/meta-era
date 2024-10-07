import React from 'react';
import styles from './Magazine.module.scss';
import { getProcessStatus } from '../../helpers/getProcessStatus';
import { nanoid } from '@reduxjs/toolkit';
import { useToApplication } from '../../hooks/useToApplication';
import { useMagazine } from '../../hooks/useMagazine';
import type { Application } from '../../interface/application.interface';

export const Magazine = (): React.JSX.Element => {
    const { handleSort, filter, sortKey, sortOrder, application } = useMagazine();
    const toApplicationElement = useToApplication();
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
                        {(Object.keys(thead) as Array<keyof typeof thead>).map((title) => (
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
                    {filter(application).map((itemMagazine) => (
                        <tr
                            className={styles.table__row}
                            key={nanoid()}
                            onClick={() =>
                                toApplicationElement(`${itemMagazine.request_guid}`, itemMagazine as Application, false)
                            }
                        >
                            <td className={styles.table__cell}>{(itemMagazine as Application).request_date}</td>
                            <td className={styles.table__cell}>
                                {(itemMagazine as Application).request_name_organization}
                            </td>
                            <td className={styles.table__cell}>
                                {getProcessStatus((itemMagazine as Application).request_processed)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
