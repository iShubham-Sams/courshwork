import { useState } from "react";



const useFileToUintEightArray = () => {
    const [uintEightData, setUintEightData] = useState<string | null>(null)

    async function fileToUint8Array(file: File): Promise<Uint8Array> {
        const buff = await file.arrayBuffer()
        let x = new Uint8Array(buff);
        var f = new Blob([x], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(f);
        setUintEightData(fileURL);
        return x
    }
    return { uintEightData, fileToUint8Array }
}

export default useFileToUintEightArray