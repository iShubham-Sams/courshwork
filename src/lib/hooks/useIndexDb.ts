import { useEffect, useState } from "react";

// Define the type of data you're storing (example)
interface MyData {
    id: number;
    file: Uint8Array
}

export function useIndexedDB() {
    const dbName = process.env.NEXT_PUBLIC_DATABASE_COURSE_NAME ?? "course_file"
    const storeName = process.env.NEXT_PUBLIC_DATABASE_STORE_NAME ?? "course_store"
    const [db, setDb] = useState<IDBDatabase | null>(null);

    useEffect(() => {
        // Initialize IndexedDB
        const initDB = () => {
            const request = indexedDB.open(process.env.NEXT_PUBLIC_DATABASE_name ?? "course_file", 1);

            request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
                const db = request.result;
                if (!db.objectStoreNames.contains(storeName)) {
                    db.createObjectStore(storeName, { keyPath: "id" });
                }
            };

            request.onsuccess = () => {
                setDb(request.result);
            };

            request.onerror = () => {
                console.error("Failed to open the database:", request.error);
            };
        };

        initDB();
    }, [dbName, storeName]);

    // Add item to IndexedDB
    const addItem = (item: MyData) => {
        if (!db) return;

        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.add(item);

        request.onsuccess = () => {
            console.log("Item added to the database", item);
        };

        request.onerror = () => {
            console.error("Failed to add item:", request.error);
        };
    };

    // Get all items from IndexedDB
    const getAllItems = (): Promise<MyData[]> => {
        return new Promise((resolve, reject) => {
            if (!db) return resolve([]);

            const transaction = db.transaction(storeName, "readonly");
            const store = transaction.objectStore(storeName);
            const request = store.getAll();

            request.onsuccess = () => {
                resolve(request.result as MyData[]);
            };

            request.onerror = () => {
                console.error("Failed to fetch items:", request.error);
                reject(request.error);
            };
        });
    };

    // Get item by ID from IndexedDB
    const getItem = (id: number): Promise<MyData | undefined> => {
        return new Promise((resolve, reject) => {
            if (!db) return resolve(undefined);

            const transaction = db.transaction(storeName, "readonly");
            const store = transaction.objectStore(storeName);
            const request = store.get(id);

            request.onsuccess = () => {
                resolve(request.result as MyData);
            };

            request.onerror = () => {
                console.error("Failed to fetch item:", request.error);
                reject(request.error);
            };
        });
    };


    return {
        addItem,
        getAllItems,
        getItem,
    };
}
