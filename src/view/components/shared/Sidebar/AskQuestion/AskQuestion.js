import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AskQuestion = () => {
    return (
        <Container>
            <Link to="/my-account/ask-question">Ask A Question</Link>
        </Container>
    );
};

export default AskQuestion;

const Container = styled.div`
    background: var(--theme-primary);
    text-align: center;
    margin-bottom: 30px;
    

    a{
        display: block;
        color: #fff;
        font-size: 14px;
        padding: 10px 15px;
        font-weight: 600;
    }
`;