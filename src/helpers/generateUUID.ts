export const generateGUID = (): string => {
    return (
        Math.random().toString(36).substring(2, 10) +
        Math.random().toString(36).substring(2, 10) +
        '-' +
        Date.now().toString(36)
    );
};
