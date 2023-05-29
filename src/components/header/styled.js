import styled from "styled-components";

export const HeaderArea = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    border-bottom: 2px solid #281c44;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;


    @media( max-width:820px) {
            
    }
    
    .container{
        height: 80px;
        display: flex;
        align-items: center;
        width: 1000px;  

        .logo{
            flex: 1;
            display: flex;
            height: 80px;
            align-items: center;
            justify-content: center;
           

            img{
                width: 50px;
                margin-top: 10px;
               
            }
        }

        nav{
            width: 800px;
            
            
            ul{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 80px;
                margin-right: 40px;

               
            }
            ul li{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    margin-left: 50px;
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

        .icon-redes{

            img{
                width: 30px;
                margin-left: 10px;
                border-radius: 25px;
   
            }
        }
    }
`;