import React from 'react';
import styles from './FilterPanel.module.scss';
import { useDispatch } from 'react-redux';
import { setPeriodDateFilter, setStatusApplicationFilter } from '../../redux/slice/filterSlice';
import { FormField } from '../formField/FormField';
import { StatusApplicationFilter } from '../../interface/slice.interface';

export const FilterPanel = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const [start, setStart] = React.useState('');
    const [end, setEnd] = React.useState('');
    const [selectCheckboxPeriod, setSelectCheckboxPeriod] = React.useState('');
    const [checkboxApplicationStatus, setCheckboxApplicationStatus] = React.useState('');

    const selectCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (target.checked) {
            const startDate = new Date();
            const endDate = new Date();

            switch (target.id) {
                case 'today':
                    break;
                case 'week':
                    startDate.setDate(startDate.getDate() - 7);
                    break;
                case 'month':
                    startDate.setMonth(startDate.getMonth() - 1);
                    break;
                default:
                    break;
            }

            dispatch(
                setPeriodDateFilter({
                    start: startDate.toLocaleDateString('ru-RU', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    }),
                    end: endDate.toLocaleDateString('ru-RU', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    }),
                }),
            );

            setSelectCheckboxPeriod(target.id);
        } else {
            setSelectCheckboxPeriod('');
            dispatch(setPeriodDateFilter({ start: '', end: '' }));
        }
    };

    const selectApplicationStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (target.checked) {
            if (checkboxApplicationStatus === target.id) {
                setCheckboxApplicationStatus('');
                dispatch(setStatusApplicationFilter('ALL'));
            } else {
                setCheckboxApplicationStatus(target.id);
                dispatch(setStatusApplicationFilter(target.id as StatusApplicationFilter));
            }
        } else {
            setCheckboxApplicationStatus('');
            dispatch(setStatusApplicationFilter('ALL'));
        }
    };

    React.useEffect(() => {
        dispatch(setPeriodDateFilter({ start, end }));
    }, [start, end]);

    return (
        <section>
            <h2>Фильтр</h2>
            <article>
                <h3>Период</h3>
                <label htmlFor="start">
                    с
                    <FormField
                        id="start"
                        type="date"
                        value={start}
                        onChange={(event) => setStart(event.target.value)}
                    />
                </label>
                <label htmlFor="end">
                    по
                    <FormField id="end" type="date" value={end} onChange={(event) => setEnd(event.target.value)} />
                </label>
            </article>
            <article className={styles.switch}>
                <h3>Переход</h3>
                <label htmlFor="today">
                    Сегодня
                    <input
                        id="today"
                        type="checkbox"
                        name="switch"
                        checked={selectCheckboxPeriod === 'today'}
                        onChange={selectCheckboxChange}
                    />
                </label>
                <label htmlFor="week">
                    Неделя
                    <input
                        id="week"
                        type="checkbox"
                        name="switch"
                        checked={selectCheckboxPeriod === 'week'}
                        onChange={selectCheckboxChange}
                    />
                </label>
                <label htmlFor="month">
                    Месяц
                    <input
                        id="month"
                        type="checkbox"
                        name="switch"
                        checked={selectCheckboxPeriod === 'month'}
                        onChange={selectCheckboxChange}
                    />
                </label>
            </article>
            <article>
                <h3>Статус заявки</h3>
                <label htmlFor="FINISHED">
                    Оработана
                    <input
                        id="FINISHED"
                        type="checkbox"
                        name="status"
                        checked={checkboxApplicationStatus === 'FINISHED'}
                        onChange={selectApplicationStatus}
                    />
                </label>
                <label htmlFor="IN_PROCESS">
                    В процессе
                    <input
                        id="IN_PROCESS"
                        type="checkbox"
                        name="status"
                        checked={checkboxApplicationStatus === 'IN_PROCESS'}
                        onChange={selectApplicationStatus}
                    />
                </label>
                <label htmlFor="REJECTED">
                    Отклонена
                    <input
                        id="REJECTED"
                        type="checkbox"
                        name="status"
                        checked={checkboxApplicationStatus === 'REJECTED'}
                        onChange={selectApplicationStatus}
                    />
                </label>
            </article>
        </section>
    );
};
