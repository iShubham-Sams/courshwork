const dbName = process.env.NEXT_PUBLIC_DATABASE_COURSE_NAME ?? "course_file"
const storeName = process.env.NEXT_PUBLIC_DATABASE_STORE_NAME ?? "course_store"
interface MyData {
    id: number;
    file: Uint8Array
}
export const initDB = (): Promise<IDBDatabase | null> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
            const db = request.result;

            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: "id" });
            }
        };

        request.onsuccess = () => {
            const db = request.result;
            resolve(db); // Resolve the promise with the opened database
        };

        request.onerror = () => {
            console.error("Failed to open the database:", request.error);
            reject(request.error); // Reject the promise if an error occurs
        };
    });
};


export const addItem = async (item: MyData) => {
    const db = await initDB()
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
export const getAllItems = async (): Promise<MyData[]> => {
    const db = await initDB()
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
export const getItem = async (id: number): Promise<MyData | undefined> => {
    const db = await initDB()
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

export const deleteItem = async (id: number): Promise<void> => {
    const db = await initDB();

    return new Promise((resolve, reject) => {
        if (!db) return resolve(undefined);
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.delete(id);

        request.onsuccess = () => {
            console.log(`Item with ID ${id} deleted from the database`);
            resolve();
        };

        request.onerror = () => {
            console.error(`Failed to delete item with ID ${id}:`, request.error);
            reject(request.error);
        };
    });
};