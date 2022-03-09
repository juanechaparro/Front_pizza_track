import React from 'react'
import { useNavigate } from "react-router-dom";
import './home.css'
export const HomeCreateScreen = () => {
  const navigate = useNavigate();
  const imagePath =`/assets/sliced-cheesy-pizza3x.png`
  const handleClick = ()=>{
    navigate('/create')
  }
  return (
    <div  className='mt100 container_create first__main '>
       <div className='box-container'>
       <img src={imagePath}
                 alt="pizza img"
                 className = "img-thumbnail animate__animated animate__fadeInLeft"
                 />
        <h3> Crea la pizza </h3>
        <p>Elige los ingredientes que desees incluir en la pizza, esta tiene un costo base de $10000</p>
        <button className='btn-prim' onClick={handleClick}> Crear Ahora</button>
       </div>
       
    </div>
  )
}

