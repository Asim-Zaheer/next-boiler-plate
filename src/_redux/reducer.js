import { combineReducers } from "@reduxjs/toolkit";
import counterSlice  from "./slices/testSlice";


const rootReducer = combineReducers({
    counter:counterSlice
})

export default rootReducer