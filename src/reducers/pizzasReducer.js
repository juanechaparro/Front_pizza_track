
import { types } from "../types/types";
const initialState = {

};

export const pizzasReducer = (state = initialState, action)=>{
switch(action.type){
    case types.SetEditIngredients:
     return {
         ...state,
         activePizza: {...state.activePizza, ingredients :action.payload }
   }
   case types.SetPrice:
     return {
         ...state,
         activePizza: {...state.activePizza, price :action.payload }
   }
   case types.clearActivePizza:
    return {
      ...state,
      loading: true,
      activePizza: null
    }
    case types.pizzasLoaded:
      return{
        ...state,
        pizzas:[...action.payload],
        loading: false
      }

    default: 
    return state;
}
}