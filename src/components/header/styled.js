import styled from "styled-components";

export const HeaderArea = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    border-bottom: 2px solid #281c44;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;


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
                justify-content: end;
                height: 80px;
                margin-right: 40px;

               
            }
            ul li{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    margin-left: 50px;
                    color: #999;
                    font-size: 20px;
                    font-family: Arial, Helvetica, sans-serif;
                    transition: all 0.1s ease-out;
                    

                    &:hover{
                        color: white;
                        border-bottom: 2px solid #fff;

                    }
            }

            ul a{
                text-decoration: none;

            }
        }

        
    }
`;