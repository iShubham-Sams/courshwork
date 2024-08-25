async function fileToUint8Array(file: File): Promise<Uint8Array> {
    const buff = await file.arrayBuffer()
    let x = new Uint8Array(buff);
    return x
}

export default fileToUint8Array