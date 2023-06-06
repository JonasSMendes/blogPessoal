import React, { forwardRef } from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styled';

import Scream from '../../components/Scream';

export default () => {
    const history = useHistory();

    return (
        <Container id='home' >
            <Scream />
        </Container>
    );
}

