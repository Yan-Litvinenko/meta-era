export type TaxPeriod = 'PERIOD_MONTH' | 'PERIOD_Q1' | 'PERIOD_Q2' | 'PERIOD_Q3' | 'PERIOD_Q4' | 'PERIOD_YEAR';
export type StatusApplication = 'NEW' | 'IN_PROCESS' | 'FINISHED' | 'REJECTED';
export type DocumentType = 'OUT' | 'IN';

export type FileData = {
    file_name: string;
    file_data: string;
};

export type FormSendApplication = {
    request_date: string;
    request_comment: string;
    request_name_organization: string;
};

export type Application = {
    request_guid: string;
    request_processed: StatusApplication;
    request_documents: FileData[];
} & FormSendApplication;

export type MagazineSlice = {
    magazine: Application[];
};
