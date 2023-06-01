import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #161623;
    height: 100%;
    

    .main-home{
        width: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
        background: rgba(255,255,255,0.1);
        border-top: 1px solid rgba(255,255,255,0.5);
        border-left: 1px solid rgba(255,255,255,0.5);
        height: 500px;
        border-radius: 10px;

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
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            

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
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            
            a{

                width: 400px;
                height: 50px;
                

                img{
                    width: 40px;
                    border-radius: 30px;
                    transition: all ease .2s;
                    border: 1px solid white;
                    background-color: #999;
                    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.32) 0px 15px 12px;
                    

                    &:hover{
                        background-color: #fff;
                        width: 45px;
                    }

                }
             }
        }

        span{
            width: 300px;
            height: 20px;
            font-size: 13px;
            color: #999;
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            text-align: center;
            margin-right: 20px;
            transition: all ease .2s;
            
            &:hover{
                font-size: 15px;
            }

        }
    }
    .logo-home{
        width: 400px;
        margin-right: 100px;


        img{
            width: 500px;
            opacity: 1;
            animation: aparece .8s ease;
            transition: all ease .4s;

            @keyframes aparece {
                0%{
                    opacity: 0;
                    width: 400px;
                    
                }
                30%{
                    opacity: 0.3;
                    width: 430px;
                }
                50%{
                    opacity: 0.5;
                    width: 450px;
                }
                70%{
                    opacity: 0.7;
                    width: 470px;
                }
                100%{
                    opacity: 1;
                    width: 500px;
                }
            }

        }
    }

    }
`;