import { useState, useCallback, Dispatch, SetStateAction } from 'react';


interface FileMetadata {
    name: string;
    size: number;
    type: string;
    lastModified: number;
}

interface UsePDFFileResult {
    file: File | null;
    metadata: FileMetadata | null;
    handleFileChange: (selectedFile: File) => void;
    setFile: Dispatch<SetStateAction<File | null>>
    setMetadata: Dispatch<SetStateAction<FileMetadata | null>>
}

const usePDFFile = (): UsePDFFileResult => {
    const [file, setFile] = useState<File | null>(null);
    const [metadata, setMetadata] = useState<FileMetadata | null>(null);

    const handleFileChange = useCallback(async (selectedFile: File) => {
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            setMetadata({
                name: selectedFile.name,
                size: selectedFile.size,
                type: selectedFile.type,
                lastModified: selectedFile.lastModified,
            });
        } else {
            alert('Please select a valid PDF file.');
            setFile(null);
            setMetadata(null);
        }
    }, []);

    return { file, metadata, handleFileChange, setFile, setMetadata };
};

export default usePDFFile;
