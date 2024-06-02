import { useEffect, useState } from 'react';

export function useSettings<T>(key: string, fallbackValue: T) {
    const [value, setValue] = useState<T>(fallbackValue);

    useEffect(() => {
        const stored = localStorage.getItem(key);
        setVal(stored ? JSON.parse(stored) : fallbackValue);
    }, []);

    const setVal = (value: T) => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [value, setVal] as const;
}
