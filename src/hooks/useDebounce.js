import { useState, useEffect } from 'react'

export const useDebounce = function (value, delay) {
    const [debounceValue, setDebounceValue] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);


    return debounceValue;
}
