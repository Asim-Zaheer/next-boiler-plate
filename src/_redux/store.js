import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./reducer";
import customStorage from "../_constants/customStorage";
import storage from 'redux-persist/lib/storage'; 

const isBrowser = typeof window !== 'undefined';

const persistConfig = {
    key: "root",
    whitelist: ["auth"], 
    storage
};

const persistedReducer = isBrowser ? persistReducer(persistConfig, rootReducer) : rootReducer;

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        }),
    devTools: process.env.NODE_ENV !== "production",
});

export const persistor = isBrowser ? persistStore(store) : null;
