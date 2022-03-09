import { customFetch } from "../helpers/fetch";
// import { preparePizzas } from "../helpers/preparePizzas";
import { types } from "../types/types";

export const addPizzaIngredients = (ingredients)=>({
    type: types.SetEditIngredients,
    payload:ingredients
});

export const addPizzaPrice = (price)=>({
    type: types.SetPrice,
    payload:price
});
export const pizzaStartAddNew = (pizza)=>{
    return async(dispatch)=>{
        try{
            const resp = await customFetch('pizzas', pizza, 'POST');
            const body = await resp.json();
            if(body.ok){
                
                dispatch(pizzaAddNew(pizza));
                 //dispatch(clearPizza());
            }
        }
        catch(error){
            console.log(error)
        }
    
    }
}
 const pizzaAddNew = (pizza)=>({
    type: types.pizzaAddNew,
    payload:pizza
}); 
const clearPizza =()=>({
    type: types.clearActivePizza
})
export const pizzasStartLoading = ()=>{
    return async(dispatch)=>{
        try{
            const resp = await customFetch('pizzas');
            const body= await resp.json();
            const pizzas = (body.pizzas);
            console.log(pizzas);
            dispatch(pizzasLoaded(pizzas));
        }catch(error){
            console.log(error)
        }
    }
}
export const pizzaByIdStartLoading = (id)=>{
    return async(dispatch)=>{
        try{
            const resp = await customFetch(`pizzas?_id=${id}`);
            const body= await resp.json();
            const pizzas = (body.pizzas);
            
            dispatch(pizzasLoaded(pizzas));
        }catch(error){
            console.log(error)
        }
    }
}
const pizzasLoaded = (pizzas)=>({
    type:types.pizzasLoaded,
    payload:pizzas
})

