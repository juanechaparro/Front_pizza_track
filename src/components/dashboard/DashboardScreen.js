import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pizzasStartLoading } from '../../actions/pizzas'
import { PizzaCard } from './PizzaCard';

export const DashboardScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(pizzasStartLoading());
    
  }, [dispatch])
  
  const pizzas = useSelector(state =>state.pizzas.pizzas ||[]);
  return (
    <div className = "row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__bounce mt100">
 

         
             {
                 pizzas.map(pizza =>(
                     <PizzaCard
                     key= {pizza.id}
                     {...pizza}
                     />
                 ))
             }
          
         
    </div>
  )
}
