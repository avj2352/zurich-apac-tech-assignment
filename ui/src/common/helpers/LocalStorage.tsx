import * as React from 'react';

const appName = `ZTA`;

export function removeLocalStorageItem (key: string) {
    const valueInLocalStorage = window.localStorage.getItem(`${appName}-${key}`);
        // only remove if there is a value with the key name
        if (valueInLocalStorage) {
            window.localStorage.removeItem(`${appName}-${key}`);            
        }
}

/**
 * Helper React Hook function 
 * for storing, retrieving Localstorage values
 * @param key {string}
 * @param defaultValue {string | Function}
 * @param {serialize?, deserialize?} {} 
 * @returns [state, setState] {Array}
 */
export function useLocalStorageState (key: string, defaultValue: string | Function = '') {
    const [state, setState] = React.useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(`${appName}-${key}`);
        if (valueInLocalStorage && valueInLocalStorage!=='') {
            // the try/catch is here in case the localStorage value was set before
            // we had the serialization in place (like we do in previous extra credits)
            try {
                return JSON.parse(valueInLocalStorage);
            } catch (error) {
                window.localStorage.removeItem(`${appName}-${key}`);
            }
        }
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    });
    
    const prevKeyRef = React.useRef(`${appName}-${key}`);
    
    // This is why its a hook, makes use of React.useEffect
    // Check the example at src/examples/local-state-key-change.js to visualize a key change
    React.useEffect(() => {
        const prevKey = prevKeyRef.current;
        if (prevKey !== `${appName}-${key}`) {
        window.localStorage.removeItem(prevKey);
        }
        prevKeyRef.current = `${appName}-${key}`;
        window.localStorage.setItem(`${appName}-${key}`, JSON.stringify(state));
    }, [`${appName}-${key}`, state]);
    
    return [state, setState];
}

/**
 * Logout User
 */
export function logoutEvent() {
    removeLocalStorageItem(`token`);
    removeLocalStorageItem(`profile`);
    window.location.href = '/';    
};