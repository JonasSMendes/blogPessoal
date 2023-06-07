import React from "react";
import {Container, Body} from './styled'

export default () =>{
    return(
        <Container id="contato" >
            <Body>
                <section className="contact">
                    <div className="contact-form">
                        <h1>Entre em <span>Contato</span></h1>
                        <p>
                            vamos trabalhar juntos, entre em contato em pelo numero:+55 81983920205
                            ou pelo email: jonas.jsm2903@gmail.com
                        </p>
                        <form action="">
                            <input type="text" placeholder="Seu Nome" required />
                            <input type="email" name="email" id='' placeholder="E-mail" required />
                            <input type="" placeholder="interesse de contato" required />
                            <textarea name="" id="" cols='30' rows='10' placeholder="Sua mensagem">

                            </textarea>
                            <input type="submit" name="" value='submit' className="btn"/>
                        </form>
                    </div>

                    <div className="contact-img">
                        <img src="/assets/kikiLogo.png"/>
                    </div>
                </section>
            </Body>
        </Container>
    )
}