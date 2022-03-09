import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { pizzaByIdStartLoading } from '../../actions/pizzas';

export const PizzaDetailScreen = () => {
  const dispatch = useDispatch();
  
  const {pizzaId} = useParams();
  useEffect(() => {
    dispatch(pizzaByIdStartLoading(pizzaId));
    
  }, [dispatch,pizzaId])
  
  const ActualPizza = useSelector(state =>state.pizzas.pizzas[0] || {});
  const imagePath = `/assets/pizzaex.png`
  console.log('actual', ActualPizza);
  if(ActualPizza){
    return (
      <div  className='mt100 first__main'>
         <div className="col animate__animated animate__fadeIn ">
          <div className="card h-100">
              
                   <img src={imagePath} className="card-img" alt='pizza' /> 
              
              <div className = "col-8">
                  <div className = "container">
                      <h5 className ="card-title"> Nombre de la pizza : {ActualPizza.pizzaName}</h5>
                      <p className ="card-text">
                      Nombre del cliente: {ActualPizza.name} <br />
                      Telefono : {ActualPizza.phone} <br />
                      Fecha de pedido : {ActualPizza.date}
                      </p>
                      <h5> Lista de ingredientes</h5>
                      { ActualPizza.ingredients &&
                      <ol>
                        
                          {ActualPizza.ingredients.map(ing =>(
                            <li key={ing}>{ing}</li>
                          ))
                          }
                      </ol>
                        }
                        
                   
                    
                    
                  </div>
              </div>
          
              </div>
          </div>
       
    
      </div>
    )
  
  }
  
  return( <h3> Loading...</h3>)
  
 
}
