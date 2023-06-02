import React from "react";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {HeaderArea} from './styled'

import {Link} from 'react-scroll'



const Header = () =>{

    let location = useLocation()


    return(
        <HeaderArea>
            <div className="container"> 
                <div className="logo">
                    <Link to='home'>
                        <img src="./assets/kikiLogo.png" />
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul>
                           <Link  to='home'><li> Home </li></Link> 
                           <Link to='sobre'><li> Sobre </li></Link>
                           <Link to='/Projetos'><li> Projetos </li></Link>
                            
                        </ul>
                    </nav>
                </div>
               
            </div>
        </HeaderArea>
    )
}

export default Header;