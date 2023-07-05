import React from "react";
import {Container, Body} from './styled'
import {DiJavascript1, DiHtml5, DiCss3, DiReact, DiPhp, DiJava} from 'react-icons/di'
import { forwardRef } from "react";


export default () => {

    return(
        <Body id="sobre">

        <div className="sobre-infos">
            <h1>sobre mim</h1>
            <p>
            Oi, me chamo Jonas e estou no primeiro semestre de Ciência da Computação. Sou um entusiasta da programação e estou constantemente explorando novas tecnologias e linguagens de programação. Tenho um grande interesse em desenvolver soluções inovadoras e eficientes para os desafios do mundo digital. Estou sempre buscando oportunidades para aprimorar minhas habilidades e colaborar em projetos empolgantes. estou determinado a me tornar um desenvolvedor de software de sucesso. Estou animado para embarcar nesta jornada emocionante e contribuir para o avanço da tecnologia.
            </p>
        </div>

        </Body>
    )
}

