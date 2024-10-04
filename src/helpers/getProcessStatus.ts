import type { StatusApplication } from '../interface/file.interface';

export const getProcessStatus = (status: StatusApplication) => {
    const statusIcons: Record<StatusApplication, string> = {
        NEW: 'Новая',
        IN_PROCESS: 'В процессе',
        FINISHED: 'Завершена',
        REJECTED: 'Отклонена',
    };

    return statusIcons[status];
};
