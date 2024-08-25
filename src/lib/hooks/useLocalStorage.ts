function useLocalStorage() {

    const getValue = (key: string) => {
        try {
            const item = window.localStorage.getItem(key);
            const parsedValue = item ? JSON.parse(item) : null
            return parsedValue as any
        } catch (error) {
            console.error("Error reading localStorage key", key, error);
        }
    }
    const setValue = (key: string, value: any) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error setting localStorage key", key, error);
        }
    };
    const deleteValue = (key: string) => {
        try {
            window.localStorage.removeItem(key);
            console.log(`Item with key '${key}' removed from localStorage`);
        } catch (error) {
            console.error("Error deleting localStorage key", key, error);
        }
    };

    return { getValue, setValue, deleteValue } as const;
}

export default useLocalStorage;
