import { Application } from '../interface/application.interface';
import { useSelector } from 'react-redux';
import { getDateMs } from '../helpers/getDateMs';
import { filterSelector } from '../redux/selectors';

export const useFilter = () => {
    const { periodDate, statusApplication } = useSelector(filterSelector);

    const filterMagazine = (application: Application[]) => {
        console.log(application);
        return application.filter((item) => {
            if (periodDate.start && periodDate.end) {
                const requestDate: number = getDateMs(item.request_date);
                return requestDate >= getDateMs(periodDate.start) && requestDate <= getDateMs(periodDate.end);
            }

            if (statusApplication !== 'ALL') {
                return statusApplication === item.request_processed;
            }

            return true;
        });
    };

    return filterMagazine;
};
