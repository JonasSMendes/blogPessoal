import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    width: 100%;
    background-color: #161623;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
    width: 1000px;


    .sobre-infos{

        text-align: center;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1{
            font-size: 70px;
            color: #9373ec;
            margin-bottom: 20px;

        }

        p{
            color: #c6c9d8bf;
            letter-spacing: 1px;
            line-height: 26px;
            font-size: 1.1rem;
            margin-bottom: 1.8rem;
            margin-top: 2.8rem;
            text-align: center;
            font-family: 'Josefin Sans', Arial, Helvetica, sans-serif;
        }
    }
    
`;
