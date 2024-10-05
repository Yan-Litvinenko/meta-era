import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
    DocumentTypeFilter,
    FilterSlice,
    PeriodDateFilter,
    StatusApplicationFilter,
    TaxPeriodFilter,
} from '../../interface/slice.interface';

const initialState: FilterSlice = {
    statusApplication: 'ALL',
    taxPeriod: 'ALL',
    documentType: 'ALL',
    periodDate: {
        start: '',
        end: '',
    },
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setStatusApplicationFilter: (state, action: PayloadAction<StatusApplicationFilter>) => {
            state.statusApplication = action.payload;
        },
        setTaxPeriodFilter: (state, action: PayloadAction<TaxPeriodFilter>) => {
            state.taxPeriod = action.payload;
        },
        setDocumentTypeFilter: (state, action: PayloadAction<DocumentTypeFilter>) => {
            (state.documentType as DocumentTypeFilter) = action.payload;
        },
        setPeriodDateFilter: (state, action: PayloadAction<PeriodDateFilter>) => {
            state.periodDate = action.payload;
        },
    },
});

export const { setDocumentTypeFilter, setPeriodDateFilter, setStatusApplicationFilter, setTaxPeriodFilter } =
    filterSlice.actions;
export default filterSlice.reducer;
