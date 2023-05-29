import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column; 
    
`;

export const Menu = styled.div`  
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
`;

export const PageBody = styled.div`
    background-image: url('/assets/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom  center;
    display: flex;
    flex: 1;
`;