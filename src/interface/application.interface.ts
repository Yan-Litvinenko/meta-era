import type { FileData, StatusApplication } from './file.interface';

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
