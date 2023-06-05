import React, { forwardRef } from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styled';

import Scream from '../../components/Scream';

function HomeScreen (ref) {
    const history = useHistory();

    return (
        <Container ref={ref}>
            <Scream id='home'/>
        </Container>
    );
}

export default forwardRef(HomeScreen);