export interface FileMetadata {
    name: string;
    size: number;
    type: string;
    lastModified: number;
}

export type LocalStoragePdfData = {
    id: number
    pdfFileTitle: string
    subject: string
    title: string
    value: string
}