import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #101010;
    padding-bottom: 30px;

`;

export const Body = styled.div`
    width: 1000px;

    section{
        
    }

    .contact{
        background-color: #101010;
        height: 100%;
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        


        .contact-form{
            
           

            h1{
                font-size: 70px;
                color: #fff;
                margin-bottom: 20px;

                span{
                    color: #f9004d;
                }
            }

            p{
                color: #c6c9d8bf;
                letter-spacing: 1px;
                line-height: 26px;
                font-size: 1.1rem;
                margin-bottom: 3.8rem;
            }

            form{
                position: relative;

                input, textarea{
                    width: 100%;
                    padding: 17px;
                    border: none;
                    outline: none;
                    background: #191919;
                    color: #fff;
                    font-size: 1.1rem;
                    margin-bottom: 0.7rem;
                    border-radius: 10px;
                }

                textarea{
                    resize: none;
                    height: 100px;
                }

                    .btn{
                        display: inline-block;
                        background: #f9004d;
                        font-size: 1.1rem;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        font-weight: 600;
                        border: 2px solid transparent;
                        border-radius: 10px;
                        width: 220px;
                        transition: ease .20s;
                        cursor: pointer;

                        &:hover{
                            border: 2px solid #f9004d;
                            background: transparent;
                            transform: scale(1.1);
                        }

                    }
                
            }
        }


        .contact-img{
            
            img{
                max-width: 100%;
                width: 520px;
                height: auto;
                border-radius: 10px;
                margin-left: 70px;
            }
        }
    }

   /* @media(max-width: 1570px){
        section{
            padding: 80px 3%;
            transition: .2s;
        }
    } 
*/
`;

