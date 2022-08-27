import { useState, useRef } from 'react';

const useStateRef = (arg) => {
  const [value, _setValue] = useState(arg);
  const valueRef = useRef(value);
  const setValue = (newValue) => {
    _setValue(newValue);
    valueRef.current = newValue;
  };
  return [value, valueRef, setValue];
};

const useStateTrigger = (initialValue) => {
  const [value, _setValue] = useState(initialValue);
  const [trigger, setTrigger] = useState(false);
  const setValue = (newValue) => {
    _setValue(newValue);
    setTrigger((b) => !b);
  };
  return [value, trigger, setValue];
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useLocalStorageRef = (key, initialValue) => {
  const [value, _setValue] = useLocalStorage(key, initialValue);
  const valueRef = useRef(value);
  const setValue = (newValue) => {
    _setValue(newValue);
    valueRef.current = newValue;
  };
  return [value, valueRef, setValue];
};

export {
  useStateRef, useStateTrigger, useLocalStorage, useLocalStorageRef,
};
