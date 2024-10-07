import type { Application } from '../interface/application.interface';
import type { ArchiveRecording } from '../interface/archive.interface';
import { useSelector } from 'react-redux';
import { getDateMs } from '../helpers/getDateMs';
import { filterSelector } from '../redux/selectors';

export const useFilter = (section: 'magazine' | 'archive') => {
    const { periodDate, statusApplication } = useSelector(filterSelector);

    const filterMagazine = (arr: Application[] | ArchiveRecording[]) => {
        if (section === 'magazine') {
            return (arr as Application[]).filter((item) => {
                if (periodDate.start && periodDate.end) {
                    const requestDate: number = getDateMs(item.request_date);
                    return requestDate >= getDateMs(periodDate.start) && requestDate <= getDateMs(periodDate.end);
                }

                if (statusApplication !== 'ALL') {
                    return statusApplication === item.request_processed;
                }

                return true;
            });
        }

        return (arr as ArchiveRecording[]).filter((item) => {
            if (periodDate.start && periodDate.end) {
                const requestDate: number = getDateMs(item.record_date);
                return requestDate >= getDateMs(periodDate.start) && requestDate <= getDateMs(periodDate.end);
            }

            if (statusApplication !== 'ALL') {
                return statusApplication === item.record_status;
            }

            return true;
        });
    };

    return filterMagazine;
};
