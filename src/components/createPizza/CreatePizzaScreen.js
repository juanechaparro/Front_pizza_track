import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addPizzaIngredients, addPizzaPrice } from '../../actions/pizzas';
import { findPrice } from '../../helpers/findPrice';
import { useFormCheckBox } from '../../hooks/useForm';
import './createStyles.css'
export const CreatePizzaScreen = () => {
    const dispatch= useDispatch();
    const {price}= useSelector(state =>state.pizzas.activePizza ||{});
    

    const [ formValues, handleInputChange ] = useFormCheckBox( {
   
    } );
    
    const navigate = useNavigate();
    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(Object.values(formValues));
        dispatch(addPizzaIngredients(Object.values(formValues)))
        navigate('/save')
        // dispatch(startLogin(name, pizzaName));
     
    }
    useEffect(() => {
      
        dispatch(addPizzaPrice(
            findPrice(Object.values(formValues))
            ))
      
       
      }, [dispatch, formValues])
  return (
    <div  className='first__main'>
        
        <form className='box-container_create' onSubmit={handleSubmit}>
        <h3>
            Elige los ingredientes 
        </h3>
        <div className='form-group'>
        <label className='form-control'>Peperoni + $4500 
        <input  className='' type="checkbox"  name="peperoni" value="Peperoni" onChange = {handleInputChange}/> 
        </label>
        </div>
        <br />
        <div className='form-group'>
         <label className='form-control'>Pollo + $5000 
         <input type="checkbox"  name="pollo" value="Pollo" onChange = {handleInputChange}/>
         </label> 
         </div>
         <br />
         <div className='form-group'>
         <label className='form-control'>Maiz + $3000 
         <input type="checkbox"  name="Maiz" value="Maiz" onChange = {handleInputChange}/> 
         </label>
         <br />
         </div>
         
         <div className='form-group'>
         <label className='form-control'>Aguacate + $3000 
         <input type="checkbox"  name="Aguacate" value="Aguacate" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />
         <div className='form-group'>
         <label className='form-control'>Carne molida + $3000 
         <input type="checkbox"  name="carne" value="carne" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />
         <div className='form-group'>
         <label className='form-control'>Pepinillos + $3000
         <input type="checkbox"  name="Pepinillos" value="Pepinillos" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />

         <div className='form-group'>
         <label className='form-control'>Cebolla + $3000 
         <input type="checkbox"  name="Cebolla" value="Cebolla" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />

         <div className='form-group'>
         <label className='form-control'>Jamon + $3000 
         <input type="checkbox"  name="Jamon" value="Jamon" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />

         <div className='form-group'>
         <label className='form-control'>Queso ricota + $3000 
         <input type="checkbox"  name="Queso ricota" value="Queso ricota" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />
         <div className='form-group'>
         <label className='form-control'>Setas + $3000 
         <input type="checkbox"  name="Setas" value="Setas" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />
         <div className='form-group'>
         <label className='form-control'>Esparragos + $3000 
         <input type="checkbox"  name="Esparragos" value="Esparragos" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />
         <div className='form-group'>
         <label className='form-control'>Piña + $3000
         <input type="checkbox"  name="Piña" value="Piña" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />
         <div className='form-group'>
         <label className='form-control'>Tocineta + $3000 
         <input type="checkbox"  name="Tocineta" value="Tocineta" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />
         <div className='form-group'>
         <label className='form-control'>Rucula + $3000 
         <input type="checkbox"  name="Rucula" value="Rucula" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />
         <div className='form-group'>
         <label className='form-control' >Champiñones + $3000 
         <input type="checkbox"  name="Champiñones" value="Champiñones" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />
         <div className='form-group'>
         <label className='form-control'>Aceitunas + $3000 
         <input type="checkbox"  name="Aceitunas" value="Aceitunas" onChange = {handleInputChange}/> 
         </label>
         </div>
         <br />
         <div><span> </span></div>
         <br />
         <button className='btn-prim' onClick={handleSubmit}>  Next  ( Precio :$ {price})</button>
         </form>

       
    </div>
  )
}
