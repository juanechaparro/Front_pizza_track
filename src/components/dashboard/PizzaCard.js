import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

export const PizzaCard = ({
    pizzaName,
    name,
    phone,
    date,
    id

}) => {
    
  return (
    <div className="col animate__animated animate__fadeIn  ">
        <div className="card h-100">
            <div className= "row no-gutters">
                <div className = "col-4"></div>
                {/* <img src={imagePath} className="card-img" alt={pizza} /> */}
            </div>
            <div className = "col-8">
                <div className = "card-body">
                    <h5 className ="card-title"> Nombre de la pizza :  {pizzaName}</h5>
                    <p className ="card-text">
                    Nombre del cliente: {name} <br />
                    Telefono : {phone} <br />
                    Fecha de pedido : {date}
                    </p>
                    
                    {/* <p className = "card-text">
                        <small className = "text-muted">{first_appearance}</small>
                    </p> */}
                    <Link to ={`/detail/${id}`} >
                        Más...
                    </Link>
                </div>
            </div>
        
            </div>
        </div>
  )
}
