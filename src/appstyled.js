import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column; 
    ;
    
`;

export const Menu = styled.div`  
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    background-color: #2e2e39;
`;

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

export const PageBody = styled.div`
    background: linear-gradient(0deg, rgba(57,57,57,1) 16%, rgba(228,174,22,0.06486344537815125) 78%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
   
    
`;

export const Footer = styled.div`
    width: 100%;
    height: 400px;
    background-image: url('/assets/studio-footer.jpg');
    background-size: cover;
    background-position: center;

`;