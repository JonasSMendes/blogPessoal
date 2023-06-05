import React, { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";

import { Container, Menu, PageBody,Footer,HeaderArea } from './appstyled';


import HomeScreen from './pages/HomeScreen';
import MainSobre from './pages/MainSobre';
import TelaProjetos from './pages/TelaProjetos'


export default () => {

    let ref = useRef(null);

    const HomeClick = () =>{
        ref.current.scrollIntoView({behavior:'smooth'});
    }

    const SobreClick = () =>{
        ref.current.scrollIntoView({behavior:'smooth'})
    }


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
                           <li onClick={HomeClick}> Home </li> 
                           <li onClick={SobreClick}> Sobre </li>
                           <li> Projetos </li>
                        </ul>
                    </nav>
                </div>
               
                </div>
                </HeaderArea>
                </Menu>
                <PageBody>
                            <HomeScreen ref={ref} />
                            <MainSobre ref={ref} />                       
                            <TelaProjetos />        
                </PageBody> 
    
            </Container>
                
        </BrowserRouter>
    );
}