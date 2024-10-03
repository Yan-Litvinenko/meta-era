export const getFileFormat = (fileName: string): string => {
    return fileName.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)![0];
};
