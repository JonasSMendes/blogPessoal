import React from "react";
import {Container, Body} from './styled'
import {DiJavascript1, DiHtml5, DiCss3, DiReact, DiPhp, DiJava} from 'react-icons/di'


export default () =>{


    return(
        <Body id="sobre">
        <Container>
            <div className="card">
                <span><DiJavascript1/></span>
                <div className="content">
                    <h3>Java.S</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu elit leo. Suspendisse lacinia
                         nunc sed ullamcorper consequat. Duis luctus diam in tortor vulputate ullamcorper.</p>
                    <a href="https://github.com/JonasSMendes/j.s" >mais informaçoes</a>  
                </div>
            </div>

            <div className="card">
                <span><DiHtml5/></span>
                <div className="content"> 
                    <h3>Html</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu elit leo. Suspendisse lacinia
                         nunc sed ullamcorper consequat. Duis luctus diam in tortor vulputate ullamcorper.</p>
                    <a href="https://github.com/JonasSMendes/Htmlcsspage" >mais informaçoes</a>  
                </div>
            </div>

            <div className="card">
                <span><DiCss3/></span>
                <div className="content">
                    <h3>Css</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu elit leo. Suspendisse lacinia
                         nunc sed ullamcorper consequat. Duis luctus diam in tortor vulputate ullamcorper.</p>
                    <a href="https://github.com/JonasSMendes/Htmlcsspage" >mais informaçoes</a>  
                </div>
            </div>

            <div className="card">
                <span><DiReact/></span>
                <div className="content">
                    <h3> React </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu elit leo. Suspendisse lacinia
                         nunc sed ullamcorper consequat. Duis luctus diam in tortor vulputate ullamcorper.</p>
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
        </Container>
        </Body>
    )
}