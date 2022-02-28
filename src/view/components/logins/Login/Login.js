import React from 'react';
import styled from 'styled-components';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

const Login = () => {
    return (
        <Container className='section-padding'>
            <span>
                <LoginForm />
            </span>
            <RegisterForm />
        </Container>
    );
};

export default Login;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding-bottom: 30px;

    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }
`;