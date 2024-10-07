import type { TaxPeriod } from '../interface/archive.interface';

export const getTaxPetiod = (key: TaxPeriod) => {
    const period: Record<TaxPeriod, string> = {
        PERIOD_YEAR: 'Год',
        PERIOD_MONTH: 'Месяц',
        PERIOD_Q1: 'Q1',
        PERIOD_Q2: 'Q2',
        PERIOD_Q3: 'Q3',
        PERIOD_Q4: 'Q4',
    };

    return period[key];
};
