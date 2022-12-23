import { useState } from 'react';

const useStorage = (storage, key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore =
        typeof value === 'function' ? value(storedValue) : value;

      setStoredValue(valueToStore);
      storage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useLocal: (key, initialValue) => useStorage(localStorage, key, initialValue),
  useSession: (key, initialValue) =>
    useStorage(sessionStorage, key, initialValue),
};
