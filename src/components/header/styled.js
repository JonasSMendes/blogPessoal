import styled from "styled-components";

export const HeaderArea = styled.div`

    
    .container{
        height: 80px;
        width: 1000px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .logo{
            flex: 1;
            
            height: 80px;

            img{
                width: 50px;
                margin-top: 10px;
                margin-left: 40px;
            }
        }

        nav{
            width: 600px;
            
            ul{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 80px;

               
            }
            ul li{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    margin-left: 30px;
                    color: #ccc;
                    font-size: 20px;
                    font-family: Arial, Helvetica, sans-serif;
                    transition: all 0.5s ease-out;

                    &:hover{
                        color: white;
                        border-bottom: 2px solid #D4ADFC;

                    }
            }

            ul a{
                text-decoration: none;

            }
        }
    }
`;