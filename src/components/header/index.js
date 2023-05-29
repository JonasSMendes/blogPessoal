import React from "react";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {HeaderArea} from './styled'



const Header = () =>{

    let location = useLocation()

    

    const handleClick = (e) =>{
        
    }

    return(
        <HeaderArea>
            <div className="container"> 
                <div className="logo">
                    <Link to='/'>
                        <img src="./assets/kikiLogo.png" />
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul>
                           <Link to='/'><li> Home </li></Link> 
                           <Link to='/sobre'><li> Sobre </li></Link>
                           <Link to='/Projetos'><li> Projetos </li></Link>
                            
                        </ul>
                    </nav>
                </div>
                <div className="icon-redes">
                   <a href='https://github.com/JonasSMendes' > <img src='/assets/github.png'/> </a>
                   <a href='https://www.linkedin.com/in/jonas-mendes-98a406226/' > <img src='/assets/linkedin.png'/> </a>
                   <a href='https://wa.me/5581983920205' > <img src='/assets/whatsapp.png'/> </a>
                </div>
            </div>
        </HeaderArea>
    )
}

export default Header;