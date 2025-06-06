import React, { useEffect } from 'react'

function useLocalStorage(key, defaultValue) {
    const [value, setValue] = React.useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
        }
        catch (error) {
            console.error(`Error accessing localStorage for key "${key}":`, error);
            currentValue = defaultValue;
        }

        return currentValue;
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting localStorage for key "${key}":`, error);
        }}
    , [key, value]);
    return [value, setValue];
}

export default useLocalStorage