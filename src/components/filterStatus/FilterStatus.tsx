import React from 'react';
import styles from './FilterStatus.module.scss';
import { FormField } from '../formField/FormField';
import { useDispatch } from 'react-redux';
import { setStatusApplicationFilter } from '../../redux/slice/filterSlice';
import { StatusApplicationFilter } from '../../interface/slice.interface';

export const FilterStatus = () => {
    const dispatch = useDispatch();
    const [checkboxApplicationStatus, setCheckboxApplicationStatus] = React.useState<StatusApplicationFilter | ''>('');

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id } = event.target;
        const newStatus = checkboxApplicationStatus === id ? '' : (id as StatusApplicationFilter);

        setCheckboxApplicationStatus(newStatus);
        dispatch(setStatusApplicationFilter(newStatus || 'ALL'));
    };

    const statuses = [
        { id: 'FINISHED', label: 'Обработана' },
        { id: 'IN_PROCESS', label: 'В процессе' },
        { id: 'REJECTED', label: 'Отклонена' },
    ];

    return (
        <section className={styles.filter}>
            <h3 className={styles.filter__title}>Статус заявки</h3>
            <div className={styles.filter__content}>
                {statuses.map(({ id, label }) => (
                    <FormField
                        key={id}
                        labelClass={styles.filter__label}
                        id={id}
                        textLabel={label}
                        type="checkbox"
                        checked={checkboxApplicationStatus === id}
                        onChange={(event) => handleStatusChange(event as React.ChangeEvent<HTMLInputElement>)}
                    />
                ))}
            </div>
        </section>
    );
};
