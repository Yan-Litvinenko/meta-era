import React from 'react';
import styles from './FilterDate.module.scss';
import { useFilterDate } from '../../hooks/useFilterDate';
import { FormField } from '../formField/FormField';

export const FilterDate = (): React.JSX.Element => {
    const { startDate, endDate, fastPeriod, handleDateChange, handlePeriodChange } = useFilterDate();

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
