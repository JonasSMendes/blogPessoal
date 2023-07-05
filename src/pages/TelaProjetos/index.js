import React from "react";
import {Container} from './styled'
import {DiJavascript1, DiHtml5, DiCss3, DiReact, DiPhp, DiJava} from 'react-icons/di'
export default () =>{
    
    return(
        <Container id="projetos">

            <h1>
                Projetos
            </h1>

        <div className="div-cards">
            <div className="card">
                <span><DiJavascript1/></span>
                <div className="content">
                    <h3>Java.S</h3>
                    <p>8 meses em Java Script foco em react.js, conhecendo bibliotecas como <b> Manipulação de DOM </b>
                     aplicado e aperfeiçoando com projetos, <b>Tratamento de dados</b> com criação de tabelas animadas,<b>Funções de Matemática e String</b> </p>
                    <a href="https://github.com/JonasSMendes/j.s" >mais informaçoes</a>  
                </div>
            </div>

            <div className="card">
                <span><DiHtml5/></span>
                <div className="content"> 
                    <h3>Html</h3>
                    <p>estrutura de html, criação de elementos com React, construção de paginas, focadas nas medidas de busca. </p>
                    <a href="https://github.com/JonasSMendes/Htmlcsspage" >mais informaçoes</a>  
                </div>
            </div>

            <div className="card">
                <span><DiCss3/></span>
                <div className="content">
                    <h3>Css</h3>
                    <p>conhecimento em css, com animação e estrutura responsiva para mobile, e aplicando em components em React.js</p>
                    <a href="https://github.com/JonasSMendes/Htmlcsspage" >mais informaçoes</a>  
                </div>
            </div>

            <div className="card">
                <span><DiReact/></span>
                <div className="content">
                    <h3> React </h3>
                    <p>React.js usando bibliotecas como <b>react-Router</b>,<b>react-styled</b>, <b>react-icon</b>, conhecimento tambem em paginas unicas <b>react-roll</b> </p>
                    <a href="https://github.com/JonasSMendes/react.js" >mais informaçoes</a>  
                </div>
            </div>

            <div className="card">
                <span> <DiPhp/></span>
                <div className="content">
                    <h3> PHP </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu elit leo. Suspendisse lacinia
                         nunc sed ullamcorper consequat. Duis luctus diam in tortor vulputate ullamcorper.</p>
                    <a href="https://github.com/JonasSMendes/php" >mais informaçoes</a>  
                </div>
            </div>

            <div className="card">
                <span><DiJava/></span>
                <div className="content">
                    <h3> JAVA </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu elit leo. Suspendisse lacinia
                         nunc sed ullamcorper consequat. Duis luctus diam in tortor vulputate ullamcorper.</p>
                    <a href="https://github.com/JonasSMendes/javaRepositorio" >mais informaçoes</a>  
                </div>
            </div>
            </div>
        </Container>
    )
}