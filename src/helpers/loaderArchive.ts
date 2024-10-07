import { store } from '../redux/store';

export const loadArchive = async () => {
    const state = store.getState();
    const guid_user: string = state.userState.user.guid;
    const currentPage: number = state.paginationState.page;
    const countElementsPage: number = state.paginationState.countElements;

    const query = new URLSearchParams({
        guid_user,
        currentPage: currentPage.toString(),
        countElementsPage: countElementsPage.toString(),
    }).toString();

    const response = await fetch(`/api/getArchive?${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
};
