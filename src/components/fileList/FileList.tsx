import React from 'react';
import stubImage from '../../assets/images/image.png';
import stubFile from '../../assets/images/file.png';
import styles from './FileList.module.scss';
import { isFileImage } from '../../helpers/isFileImage';
import { nanoid } from '@reduxjs/toolkit';
import { getFileFormat } from '../../helpers/getFileFormat';
import { base64ToFile } from '../../helpers/base64ToFile';
import type { FileData } from '../../interface/file.interface';

type FileListProps = {
    files: FileData[];
    setFiles: React.Dispatch<React.SetStateAction<FileData[]>>;
};

export const FileList = (props: FileListProps): React.JSX.Element => {
    const { files, setFiles } = props;

    const fileRemove = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, index: number): void => {
        event.stopPropagation();
        setFiles((prev) => {
            return prev.filter((_, i) => i !== index);
        });
    };

    if (!files.length) {
        return <></>;
    }

    const downloadLink = (file: FileData): string => {
        return URL.createObjectURL(base64ToFile(file.file_data, file.file_name));
    };

    return (
        <>
            <article className={styles.list}>
                {files.map((file, index) => {
                    const fileFormat: string = getFileFormat(file.file_name);
                    const isImage: boolean = isFileImage(fileFormat);

                    return (
                        <figure className={styles.list__item} key={nanoid()}>
                            <span className={styles.list__item_remove} onClick={(event) => fileRemove(event, index)}>
                                &#10006;
                            </span>
                            <img className={styles.list__img} src={isImage ? stubImage : stubFile} alt="Заглушка" />
                            {!isImage ? <span className={styles.list__item_format}>{fileFormat}</span> : null}

                            <figcaption className={styles.list__descr}>
                                {' '}
                                <a href={downloadLink(file)} download={file.file_name}>
                                    {file.file_name}
                                </a>
                            </figcaption>
                        </figure>
                    );
                })}
            </article>
        </>
    );
};
