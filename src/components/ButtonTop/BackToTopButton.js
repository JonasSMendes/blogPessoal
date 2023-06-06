import React from "react";
import { ButtonUpToTop } from './styled'
import { SiAcclaim } from "react-icons/si";

import { useEffect, useState } from "react";

function BackToTopButton () {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    },[])

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return(
        <div>
            {backToTopButton &&
                <ButtonUpToTop onClick={scrollUp}> 
                    <SiAcclaim style={{color:'#9373ec'}} />
                 </ButtonUpToTop>
            }
        </div>
    )

}

export default BackToTopButton;