import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { FileMetadata } from '../types/share';


interface UsePDFFileResult {
    file: string | null;
    metadata: FileMetadata | null;
    handleFileChange: (selectedFile: File) => void;
    setFile: Dispatch<SetStateAction<string | null>>
    setMetadata: Dispatch<SetStateAction<FileMetadata | null>>
}
async function fileToUint8Array(file: File): Promise<Uint8Array> {
    const buff = await file.arrayBuffer()
    let x = new Uint8Array(buff);
    return x
}

const usePDFFile = (): UsePDFFileResult => {
    const [file, setFile] = useState<string | null>(null);
    const [metadata, setMetadata] = useState<FileMetadata | null>(null);

    const handleFileChange = useCallback(async (selectedFile: File) => {
        if (selectedFile && selectedFile.type === 'application/pdf') {
            const fileUni = await fileToUint8Array(selectedFile)
            var file = new Blob([fileUni], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
            setFile(fileURL);
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
