import type { Application } from './application.interface';
import type { TaxPeriod } from './file.interface';

export type UserSlice = {
    name: string;
    guid: string;
    magazine: Application[];
};

export type MagazineSlice = {
    magazine: Application[];
};

export type ModalSlice = {
    modal: {
        application: boolean;
    };
};

export type PaginationSlice = {
    page: number;
    countElements: number;
    maxPage: number;
};

export type StatusApplicationFilter = 'NEW' | 'IN_PROCESS' | 'FINISHED' | 'REJECTED' | 'ALL';
export type TaxPeriodFilter = TaxPeriod | 'ALL';
export type DocumentTypeFilter = DocumentType | 'ALL';
export type PeriodDateFilter = {
    start: string;
    end: string;
};

export type FilterSlice = {
    statusApplication: StatusApplicationFilter;
    taxPeriod: TaxPeriodFilter;
    documentType: DocumentTypeFilter;
    periodDate: PeriodDateFilter;
};
