import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {HeaderArea} from './styled'


const Header = () =>{
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
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>Projetos</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderArea>
    )
}

export default Header;