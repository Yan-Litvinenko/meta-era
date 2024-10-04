import React from 'react';
import { convertToBase64 } from '../helpers/convertToBase64';
import type { FileData } from '../interface/file.interface';

type UseFileData = [
    FileData[],
    string | null,
    React.Dispatch<React.SetStateAction<FileData[]>>,
    (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>,
];

const MAX_FILE_SIZE: number = 3 * 1024 * 1024;

export const useFileData = (): UseFileData => {
    const [fileData, setFileData] = React.useState<FileData[]>([]);
    const [error, setError] = React.useState<string | null>(null);

    const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        const selectedFiles = e.target.files;

        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles);
            const newFiles: FileData[] = [];

            for (const file of filesArray) {
                if (file.size > MAX_FILE_SIZE) {
                    setError('Размер файла превышает 3 мб');
                    break;
                }

                if (fileData.length >= 9) {
                    setError('Достигнуто максимальное количество файлов (9)');
                    break;
                }

                const base64Data: string = await convertToBase64(file);
                newFiles.push({ file_name: file.name, file_data: base64Data });
            }

            setFileData((prev) => [...prev, ...newFiles]);
        }
    };

    return [fileData, error, setFileData, handleChangeFile];
};
