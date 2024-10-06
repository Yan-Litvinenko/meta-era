import React from 'react';
import { useDispatch } from 'react-redux';
import { setPeriodDateFilter } from '../redux/slice/filterSlice';

export const useFilterDate = () => {
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

    return { startDate, endDate, fastPeriod, handleDateChange, handlePeriodChange };
};
