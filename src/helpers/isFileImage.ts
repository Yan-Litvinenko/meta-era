export const isFileImage = (fileFormat: string): boolean => {
    const imageFormat: string[] = ['.jpg', '.jpeg', '.png'];

    if (imageFormat.includes(fileFormat)) {
        return true;
    }

    return false;
};
