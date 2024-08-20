import { useState } from "react";

function useLocalStorage() {
    const [localStorageValue, setLocalStorageValue] = useState<any>()
    const getValue = (key: string) => {
        try {
            const item = window.localStorage.getItem(key);
            const parsedValue = item ? JSON.parse(item) : null
            setLocalStorageValue(parsedValue)
        } catch (error) {
            console.error("Error reading localStorage key", key, error);
        }
    }
    const setValue = <T>(key: string, value: T) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setLocalStorageValue(value)
        } catch (error) {
            console.error("Error setting localStorage key", key, error);
        }
    };

    return [localStorageValue, getValue, setValue] as const;
}

export default useLocalStorage;
