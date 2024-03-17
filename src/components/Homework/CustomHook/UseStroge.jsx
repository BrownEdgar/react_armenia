import React from 'react'
import { useState } from 'react';

function useStorage (key){
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  });


  const addToStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  const deleteFromStorage = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return [value, addToStorage, deleteFromStorage];
}

export default useStorage;


