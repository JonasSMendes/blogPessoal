import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { Link } from 'react-scroll';

import { Container, Menu, PageBody,HeaderArea } from './appstyled';


import HomeScreen from './pages/HomeScreen';
import MainSobre from './pages/MainSobre';
import TelaProjetos from './pages/TelaProjetos'
import Contato from './pages/Contato';

import BackToTopButton from './components/ButtonTop/BackToTopButton'

export default () => {

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                <HeaderArea>

                <div className="container">

                <div className="logo">
                    <img src="./assets/kikiLogo.png" />
                </div>

                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='home' smooth={true} offset={50} duration={500}>home</Link>
                            </li>
                            <li>
                                <Link to='sobre' smooth={true} offset={50} duration={500}>sobre</Link>
                            </li>
                            <li>
                                <Link to='projetos' smooth={true} offset={50} duration={500}>projetos</Link>
                            </li>
                            <li>
                                <Link to='contato' smooth={true} offset={50} duration={500}>contato</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
               
                </div>
                </HeaderArea>
                </Menu>
                <PageBody>  
                        <HomeScreen />
                        <MainSobre />                       
                        <TelaProjetos /> 
                        <Contato/>    
                </PageBody> 
    
            </Container>

            <BackToTopButton/>

        </BrowserRouter>
    );
}