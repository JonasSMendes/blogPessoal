import React, {useRef, useLayoutEffect} from "react";
import {Container} from './styled'

export  default () =>{

    let titulo = useRef();

    useLayoutEffect(()=>{

        const typewitite = (e) =>{
            let textoArray = e.innerHTML.split('');
            e.innerHTML = '';
            textoArray.forEach((letra, i)=>{
                setTimeout(()=>{
                    e.innerHTML += letra;
                },100 * i)
            });
        }

        typewitite(titulo.current)
    })
   
    return(
        <Container>
            <div className="main-home">
            <div className="text-profile">
                <div className="texte-home">
                <h1 ref={titulo} >oi eu sou JonasSmendes:) desenvolvedor Frontend...</h1>
                </div>
                <div className="icon-redes">
                   <a href='https://github.com/JonasSMendes' > <img src='/assets/github.png'/> </a>
                   <a href='https://www.linkedin.com/in/jonas-mendes-98a406226/' > <img src='/assets/linkedin.png'/> </a>
                   <a href='https://wa.me/5581983920205' > <img src='/assets/whatsapp.png'/> </a>
                </div>
            </div>
            <div className="logo-home">
                <img src="/assets/painel-home.jpg" />
            </div>
            </div>
        </Container>
    )
}