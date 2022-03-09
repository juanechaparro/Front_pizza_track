import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import './uiStyles.css'
export const NavBar = () => {
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
   
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
      const handleClick = (route)=>{
        navigate(route);
        toggleNav();
    }
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])
  const navItems = { 
    "routes": [
        {
        
        "name": "Home",
        "route":"/",
        "id": "4"
        },
        {
         "name":"Crea una Pizza",
        "route":"/create",
         "id": "1"
        } ,
        {
          "name": "Dashboard",
         "route":"/dashboard",
          "id": "3"
         }
         
         ]
   
    }
  return ( 
 
  <nav>
  {(toggleMenu || screenWidth > 920) && (
  <ul className="list">
      {
          navItems.routes.map((nave)=>{return(
            <li className="items"
             key={nave.id}
             onClick={e =>handleClick(nave.route)}>
                 {nave.name}
            </li> 
          )
           
          })
      }
  

  
</ul>
  )}
    
  <a onClick={toggleNav} className="btn"><i className="fa fa-bars fa-2x"></i></a>

</nav>


 

)
}
