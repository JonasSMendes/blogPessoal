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
            background-color: red;

            img{
                width: 50px;
            }
        }

        nav{
            width: 600px;
            background-color: bisque;
            ul{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;

               
            }
            ul li{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
            }
        }
    }
`;