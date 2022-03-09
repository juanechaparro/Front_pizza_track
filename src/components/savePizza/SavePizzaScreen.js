import React from 'react'
import { useForm } from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux'
import { pizzaStartAddNew } from '../../actions/pizzas';
import { useNavigate } from 'react-router-dom';
export const SavePizzaScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {price,ingredients}= useSelector(state =>state.pizzas.activePizza ||{});
    const [ formValues, handleInputChange ] = useForm( {
     
    } );
    const date = new Date();
    const {name, pizzaName, phone} = formValues;
    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log({...formValues, price, date, ingredients});
        
        dispatch(pizzaStartAddNew({...formValues, price, date,ingredients}));
        navigate('/dashboard');
    }
  return (
    <div  className='mt100 first__main'> 
    

           <form className='box-container' onSubmit={handleSubmit}>
           <h3>
           Guarda la informacion correspondiente a la compra
           </h3>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre del comprador"
                                name= "name"
                                value ={name}
                                onChange = {handleInputChange}
                                required ={ true}
                                
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre de la pizza"
                                name= "pizzaName"
                                value ={pizzaName}
                                onChange = {handleInputChange}
                                required ={ true}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Numero de telefono"
                                name= "phone"
                                value ={phone}
                                onChange = {handleInputChange}
                                required ={ true}
                            />
                        </div>
                        <span>Precio $ {price}</span>
                        <br />
                        <span>Fecha  </span>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Guardar" 
                            />
                        </div>
                       
                    </form>
        

    </div>
  )
}
