import React from 'react';
import styles from './Archive.module.scss';
import { getDocumentType } from '../../helpers/getDocumentType';
import { getProcessStatus } from '../../helpers/getProcessStatus';
import { getTaxPetiod } from '../../helpers/getTaxPetiod';
import { loadArchive } from '../../helpers/loaderArchive';
import { nanoid } from '@reduxjs/toolkit';
import { paginationSelector, triggerSelector } from '../../redux/selectors';
import { setMaxPage } from '../../redux/slice/paginationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFilter } from '../../hooks/useFilter';
import { useToApplication } from '../../hooks/useToApplication';
import type { ArchiveRecording } from '../../interface/archive.interface';

export const Archive = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const { trigger } = useSelector(triggerSelector);
    const { page } = useSelector(paginationSelector);
    const toApplicationElement = useToApplication();
    const [archive, setArchive] = React.useState<ArchiveRecording[]>([]);
    const [sortKey, setSortKey] = React.useState<keyof ArchiveRecording | null>(null);
    const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc');
    const filter = useFilter('archive');

    const handleSort = (key: keyof ArchiveRecording) => {
        if (sortKey === key) {
            setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };

    React.useEffect(() => {
        (async () => {
            const response: { archive: ArchiveRecording[]; maxPage: number } = await loadArchive();

            console.log(response.archive);

            dispatch(setMaxPage(response.maxPage));
            setArchive(response.archive);
        })();
    }, [page, trigger]);

    const thead: Partial<Record<keyof ArchiveRecording, string>> = {
        record_date: 'Дата',
        record_status: 'Статус',
        document_number: 'Номер',
        document_type: 'Тип документа',
        tax_period: 'Налоговый период',
        organization_name: 'Название организации',
    };

    return (
        <section>
            <h1>Архив заявок</h1>
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
                    {filter(archive as ArchiveRecording[]).map((itemArchive) => (
                        <tr
                            className={styles.table__row}
                            key={nanoid()}
                            onClick={() =>
                                toApplicationElement(
                                    `${itemArchive.request_guid}`,
                                    itemArchive as ArchiveRecording,
                                    true,
                                )
                            }
                        >
                            <td className={styles.table__cell}>{(itemArchive as ArchiveRecording).document_date}</td>
                            <td className={styles.table__cell}>
                                {getProcessStatus((itemArchive as ArchiveRecording).record_status)}
                            </td>
                            <td className={styles.table__cell}>{(itemArchive as ArchiveRecording).document_number}</td>
                            <td className={styles.table__cell}>
                                {getDocumentType((itemArchive as ArchiveRecording).document_type)}
                            </td>
                            <td className={styles.table__cell}>
                                {getTaxPetiod((itemArchive as ArchiveRecording).tax_period)}
                            </td>
                            <td className={styles.table__cell}>
                                {(itemArchive as ArchiveRecording).organization_name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
