import React from 'react';
import stubImage from '../../assets/images/image.png';
import stubFile from '../../assets/images/file.png';
import styles from './FileList.module.scss';
import { isFileImage } from '../../helpers/isFileImage';
import { nanoid } from '@reduxjs/toolkit';
import { getFileFormat } from '../../helpers/getFileFormat';
import type { FileData } from '../../interface/file.interface';

type FileListProps = {
    files: FileData[];
    setFiles: React.Dispatch<React.SetStateAction<FileData[]>>;
};

export const FileList = (props: FileListProps): React.JSX.Element => {
    const { files, setFiles } = props;

    const fileRemove = (index: number): void => {
        setFiles((prev) => {
            return prev.filter((_, i) => i !== index);
        });
    };

    if (!files.length) {
        return <></>;
    }

    return (
        <>
            <article className={styles.list}>
                {files.map((file, index) => {
                    const fileFormat: string = getFileFormat(file.file_name);
                    const isImage: boolean = isFileImage(fileFormat);

                    return (
                        <figure className={styles.list__item} key={nanoid()}>
                            <span className={styles.list__item_remove} onClick={() => fileRemove(index)}>
                                &#10006;
                            </span>
                            <img className={styles.list__img} src={isImage ? stubImage : stubFile} alt="Заглушка" />
                            {!isImage ? <span className={styles.list__item_format}>{fileFormat}</span> : null}
                            <figcaption className={styles.list__descr}>{file.file_name}</figcaption>
                        </figure>
                    );
                })}
            </article>
        </>
    );
};
