import React from 'react';
import { convertToBase64 } from '../helpers/convertToBase64';
import type { FileData } from '../interface/file.interface';

type UseFileData = [
    FileData[],
    string | false,
    React.Dispatch<React.SetStateAction<FileData[]>>,
    (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>,
];

const MAX_FILE_SIZE: number = 3 * 1024 * 1024;

export const useFileData = (): UseFileData => {
    const [fileData, setFileData] = React.useState<FileData[]>([]);
    const [error, setError] = React.useState<string | false>('');

    const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        const selectedFiles = e.target.files;

        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles);

            filesArray.forEach((file) => {
                if (file.size > MAX_FILE_SIZE) {
                    setError('Размер файл превышает 3мб');
                }

                if (fileData.length === 9) {
                    return;
                }
                return;
            });

            const filesWithBase64: FileData[] = await Promise.all(
                filesArray.map(async (file) => {
                    const base64Data: string = await convertToBase64(file);
                    return { file_name: file.name, file_data: base64Data };
                }),
            );

            setFileData((prev) => {
                return [...prev, ...filesWithBase64];
            });
        }
    };

    return [fileData, error, setFileData, handleChangeFile];
};
