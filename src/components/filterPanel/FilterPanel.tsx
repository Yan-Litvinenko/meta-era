import React from 'react';
import styles from './FilterPanel.module.scss';
import { FilterDate } from '../filterDate/FilterDate';
import { FilterStatus } from '../filterStatus/FilterStatus';

export const FilterPanel = (): React.JSX.Element => {
    return (
        <article className={styles.panel}>
            <h2 className={styles.panel__title}>Панель фильтров</h2>
            <FilterDate />
            <FilterStatus />
        </article>
    );
};
