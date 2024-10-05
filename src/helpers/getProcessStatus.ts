import type { StatusApplication } from '../interface/file.interface';

export const getProcessStatusInMagazine = (status: StatusApplication) => {
    const states = {
        FINISHED: 'Обработана',
        IN_PROCESS: 'Не обработана',
        NEW: 'Новая',
        REJECTED: 'Отклонена',
    };
    return states[status];
};
