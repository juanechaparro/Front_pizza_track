import moment from "moment"


export const preparePizzas = (pizzas = [])=>{
 
    return pizzas.map(
        (p)=>({
            ...p,
            date: moment(p.date).toDate()
        })
    );
}