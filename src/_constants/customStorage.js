// _constants/customStorage.js
'use client';

const customStorage = {
  getItem: async (key) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null; // Return null if it's being accessed during SSR
  },
  setItem: async (key, value) => {
    if (typeof window !== 'undefined') {
      return localStorage.setItem(key, value);
    }
    return null;
  },
  removeItem: async (key) => {
    if (typeof window !== 'undefined') {
      return localStorage.removeItem(key);
    }
    return null;
  },
};

export default customStorage;
