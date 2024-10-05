import React from 'react';
import { useDispatch } from 'react-redux';
import { FilterDate } from '../filterDate/FilterDate';
import { setStatusApplicationFilter } from '../../redux/slice/filterSlice';
import { StatusApplicationFilter } from '../../interface/slice.interface';

export const FilterPanel = (): React.JSX.Element => {
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
        <section>
            <h2>Фильтр</h2>
            <FilterDate />

            <article>
                <h3>Статус заявки</h3>
                {statuses.map(({ id, label }) => (
                    <label key={id} htmlFor={id}>
                        {label}
                        <input
                            id={id}
                            type="checkbox"
                            name="status"
                            checked={checkboxApplicationStatus === id}
                            onChange={handleStatusChange}
                        />
                    </label>
                ))}
            </article>
        </section>
    );
};
