import { defer } from 'react-router';
import { store } from '../../redux/store';

const loadMagazine = async () => {
    const state = store.getState();
    const guid = state.userState.user.guid;

    const response = await fetch('/api/getMagazine', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${guid}`,
        },
    });

    return response.json();
};

export const loaderMagazine = () => {
    return defer({
        magazine: loadMagazine(),
    });
};
