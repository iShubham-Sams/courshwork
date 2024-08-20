async function fileToUint8Array(file: File): Promise<Uint8Array> {
    const buff = await file.arrayBuffer()
    let x = new Uint8Array(buff);
    var f = new Blob([x], { type: 'application/pdf' });
    var fileURL = URL.createObjectURL(f);
    return x
}

export default fileToUint8Array