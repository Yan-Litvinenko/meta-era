export type TaxPeriod = 'PERIOD_MONTH' | 'PERIOD_Q1' | 'PERIOD_Q2' | 'PERIOD_Q3' | 'PERIOD_Q4' | 'PERIOD_YEAR';
export type StatusApplication = 'NEW' | 'IN_PROCESS' | 'FINISHED' | 'REJECTED';
export type DocumentType = 'OUT' | 'IN';

export type FileData = {
    file_name: string;
    file_data: string;
};
