export const base64ToFile = (base64: string, fileName: string) => {
    const base64Data: string = base64.split(',')[1];
    const binaryString: string = window.atob(base64Data);
    const len: number = binaryString.length;
    const byteArray: Uint8Array = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
        byteArray[i] = binaryString.charCodeAt(i);
    }

    return new File([byteArray], fileName);
};
