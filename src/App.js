import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Container, Menu, PageBody,Footer } from './appstyled';

import Header from './components/header';

import HomeScreen from './pages/HomeScreen';
import MainSobre from './pages/MainSobre';
import TelaProjetos from './pages/TelaProjetos'


export default () => {

 
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <Header/>
                </Menu>
                <PageBody>

                            <HomeScreen/>
                            <MainSobre />                       
                            <TelaProjetos/> 
                                 
                </PageBody> 

                
            </Container>
            
            
        </BrowserRouter>
    );
}