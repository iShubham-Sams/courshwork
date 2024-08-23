import { useState } from "react";

export type LocalStorageValue = {
    id: number
    subject: string
    title: string
    value: string
    pdfFileTitle: string
}
function useLocalStorage() {
    const [localStorageValue, setLocalStorageValue] = useState<LocalStorageValue[] | null>(null)
    const getValue = (key: string) => {
        try {
            const item = window.localStorage.getItem(key);
            const parsedValue = item ? JSON.parse(item) : null
            setLocalStorageValue(parsedValue)
        } catch (error) {
            console.error("Error reading localStorage key", key, error);
        }
    }
    const setValue = <T extends LocalStorageValue[]>(key: string, value: T) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setLocalStorageValue(value)
        } catch (error) {
            console.error("Error setting localStorage key", key, error);
        }
    };

    return { localStorageValue, getValue, setValue } as const;
}

export default useLocalStorage;
