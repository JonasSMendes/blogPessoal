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