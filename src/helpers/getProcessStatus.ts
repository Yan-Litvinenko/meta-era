import type { StatusApplication } from '../interface/file.interface';

export const getProcessStatus = (status: StatusApplication) => {
    const statusIcons: Record<StatusApplication, string> = {
        NEW: '🆕',
        IN_PROCESS: '🔄',
        FINISHED: '✅',
        REJECTED: '❌',
    };

    return statusIcons[status];
};
