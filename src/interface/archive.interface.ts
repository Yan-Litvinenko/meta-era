import type { FileData, StatusApplication } from './file.interface';

export type DocumentType = 'OUT' | 'IN';
export type TaxPeriod = 'PERIOD_MONTH' | 'PERIOD_Q1' | 'PERIOD_Q2' | 'PERIOD_Q3' | 'PERIOD_Q4' | 'PERIOD_YEAR';

export type ArchiveRecording = {
    document_date: string;
    document_number: string;
    document_presentation_guid: string;
    document_presentation: string;
    document_type: DocumentType;
    fileList: FileData[];
    organization_guid: string;
    organization_name: string;
    record_comment: string;
    record_date: string;
    record_status_comment: string;
    record_status: StatusApplication;
    request_guid: string;
    tax_period_end_date: string;
    tax_period: TaxPeriod;
};
