import { useState, useCallback } from 'react';
import { FileMetadata } from '../types/share';


interface UsePDFFileResult {
    metadata: FileMetadata | null;
    handleFileChange: (selectedFile: File) => void;
}


const usePDFFile = (): UsePDFFileResult => {
    const [metadata, setMetadata] = useState<FileMetadata | null>(null);
    const handleFileChange = useCallback(async (selectedFile: File) => {
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setMetadata({
                name: selectedFile.name,
                size: selectedFile.size,
                type: selectedFile.type,
                lastModified: selectedFile.lastModified,
            });
        } else {
            alert('Please select a valid PDF file.');
            setMetadata(null);
        }
    }, []);

    return { metadata, handleFileChange };
};

export default usePDFFile;
