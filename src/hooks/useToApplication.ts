import { useNavigate } from 'react-router';
import type { ArchiveRecording } from '../interface/archive.interface';
import type { Application } from '../interface/application.interface';

export const useToApplication = () => {
    const navigate = useNavigate();

    return (url: string, item: Application | ArchiveRecording, isArchive: boolean) => {
        navigate(url, { state: { item, isArchive: isArchive } });
    };
};
