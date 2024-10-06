import React from 'react';
import styles from './FilterDate.module.scss';
import { useDispatch } from 'react-redux';
import { setPeriodDateFilter } from '../../redux/slice/filterSlice';
import { FormField } from '../formField/FormField';

export const FilterDate = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [fastPeriod, setFastPeriod] = React.useState('');

    const handleDateChange = (type: 'start' | 'end', value: string) => {
        if (type === 'start') setStartDate(value);
        if (type === 'end') setEndDate(value);
    };

    const handlePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = event.target;

        setStartDate('');
        setEndDate('');

        if (checked) {
            const currentDate = new Date();
            let calculatedStartDate = new Date(currentDate);

            switch (id) {
                case 'week':
                    calculatedStartDate.setDate(currentDate.getDate() - 7);
                    break;
                case 'month':
                    calculatedStartDate.setMonth(currentDate.getMonth() - 1);
                    break;
                case 'today':
                default:
                    break;
            }

            dispatch(
                setPeriodDateFilter({
                    start: calculatedStartDate.toLocaleDateString('ru-RU', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    }),
                    end: currentDate.toLocaleDateString('ru-RU', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    }),
                }),
            );

            setFastPeriod(id);
        } else {
            setFastPeriod('');
            dispatch(setPeriodDateFilter({ start: '', end: '' }));
        }
    };

    React.useEffect(() => {
        if (!fastPeriod) {
            dispatch(setPeriodDateFilter({ start: startDate, end: endDate }));
        }
    }, [startDate, endDate, fastPeriod, dispatch]);

    return (
        <>
            <section className={styles.filter}>
                <h3 className={styles.filter__title}>Фильтр по периоду</h3>
                <div className={styles.filter__content}>
                    <FormField
                        textLabel="c"
                        id="start"
                        type="date"
                        value={startDate}
                        onChange={(event) => handleDateChange('start', event.target.value)}
                    />
                    <FormField
                        textLabel="по"
                        id="end"
                        type="date"
                        value={endDate}
                        onChange={(event) => handleDateChange('end', event.target.value)}
                    />
                </div>
            </section>

            <section className={styles.fast_filter}>
                <h3 className={styles.fast_filter__title}>Быстрый выбор</h3>
                <div className={styles.fast_filter__content}>
                    {['today', 'week', 'month'].map((period) => (
                        <FormField
                            key={period}
                            labelClass={styles.fast_filter__label}
                            id={period}
                            textLabel={period === 'today' ? 'Сегодня' : period === 'week' ? 'Неделя' : 'Месяц'}
                            type="checkbox"
                            checked={fastPeriod === period}
                            onChange={(event) => handlePeriodChange(event as React.ChangeEvent<HTMLInputElement>)}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};
