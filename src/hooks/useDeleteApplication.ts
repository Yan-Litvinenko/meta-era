import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/selectors';

export const useDeleteApplication = (guid_application: string) => {
    const navigate = useNavigate();
    const { guid } = useSelector(userSelector);

    const deleteApplication = async () => {
        const response = await fetch(`/api/delete/${guid}/${guid_application}`, {
            method: 'DELETE',
        });

        const result = await response.json();

        if (result) {
            navigate(-1);
            alert('Заявка удалена');
        } else {
            alert('Ошибка удаления');
        }
    };

    return deleteApplication;
};
