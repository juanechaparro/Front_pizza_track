import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeCreateScreen } from '../components/home/HomeCreateScreen'
import { CreatePizzaScreen } from '../components/createPizza/CreatePizzaScreen'
import { SavePizzaScreen } from '../components/savePizza/SavePizzaScreen'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { PizzaDetailScreen } from '../components/pizzaDetail/PizzaDetailScreen'
import { NavBar } from '../components/ui/Navbar'

export const AppRouter = () => {

  return (
    <div>
    <NavBar/>
    <Routes>
      
    <Route  path ="/create" 
     element ={<CreatePizzaScreen/>} /> 
    <Route  path ="/save" 
       element ={<SavePizzaScreen/> } /> 
    <Route  path ="/dashboard" 
       element ={<DashboardScreen/> } /> 
     <Route  path ="/detail/:pizzaId" 
       element ={<PizzaDetailScreen/> } /> 
    <Route  path ="/" 
     element ={<HomeCreateScreen/>}>
    </Route>
    </Routes>
    </div>
  )
}
