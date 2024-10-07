export const getDocumentType = (key: 'OUT' | 'IN') => {
    const documentType = {
        OUT: 'Исходящий',
        IN: 'Входящий',
    };

    return documentType[key];
};
