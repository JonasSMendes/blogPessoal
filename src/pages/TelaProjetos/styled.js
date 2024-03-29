import styled from "styled-components";

export const Container = styled.div`
   
    margin-bottom: 50px;
    

    h1{
       
        font-size: 70px;
        color: #9373ec;
        margin-bottom: 20px;
        text-align: center;

    }

    .div-cards{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1000px;
        flex-wrap: wrap;
        z-index: 1;


    .card{
        position: relative;
        width: 250px;
        height: 350px;
        margin: 30px;
        box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
        border-radius: 15px;
        background: rgba(255,255,255,0.1);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(255,255,255,0.5);
        border-left: 1px solid rgba(255,255,255,0.5);
        cursor: pointer;

        span{ 
            position: absolute;
            top: 80px;
            right: 10px;
            font-size: 10em;
            color: rgba(255,255,255,0.05);
            pointer-events: none;
  
        }

        .content{
            padding: 10px;
            text-align: center;
            transform: translatey(100px);
            opacity: 0;
            transition: 0.5s;

            &:hover{
            transform: translateY(0);
            opacity: 1;

        }

            h3{
                font-size: 1.8em;
                color: #fff;
                z-index: 1;
            }

            p{
                font-size: 1em;
                color: #fff;
                font-weight: 300;
                font-family: 'Josefin Sans', Arial, Helvetica, sans-serif;
            }

            a{
                position: relative;
                display: inline-block;
                padding: 8px 20px;
                margin-top: 15px;
                background-color: #fff;
                color: #000;
                text-decoration: none;
                border-radius: 20px;
                font-weight: 500;
                box-shadow: 0 5px 8px rgba(255,255,255,0.2);
            }
    }
}
}
    
`;