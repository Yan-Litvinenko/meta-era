import { base64ToFile } from './base64ToFile';
import type { FileData } from '../interface/file.interface';

export const loadFilesIntoInput = (filesData: FileData[]) => {
    const files = filesData.map((fileData) => base64ToFile(fileData.file_data, fileData.file_name));
    const dataTransfer = new DataTransfer();

    files.forEach((file) => {
        dataTransfer.items.add(file);
    });

    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    input.files = dataTransfer.files;
};
