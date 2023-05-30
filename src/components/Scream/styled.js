import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .main-home{
        width: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        height: 500px;

    .text-profile{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    .texte-home{

        width: 400px;
        height: 250px;

        h1{
            max-width: 400px;
            text-align: center;
            font-family: 'Courier New', Courier, monospace;
            color: #000;
            font-size: 40px;
            font-weight: bold;
            margin-left: 40px;

            &:after{
                content:'|';
                margin-left: 5px;
                opacity: 1;
                animation: pisca .7s infinite;
            }

            @keyframes pisca {
                0%, 100%{
                    opacity:1;
                }
                50%{
                    opacity:0;
                }
            }
        }
        }
        .icon-redes{
            width: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            a{



                img{
                    width: 40px;
                    margin-left: 30px;
                    border-radius: 25px;

                    &:hover{
                        background-color: #5be4a9;
                    }

                }
             }
        }
    }
    .logo-home{


        img{
            max-width: 400px;
            margin-right:60px;
        }
    }

    }
`;