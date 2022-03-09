import { combineReducers } from "redux";
import { pizzasReducer } from "./pizzasReducer";


export const rootReducer = combineReducers({
    pizzas: pizzasReducer
   
})