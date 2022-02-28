import React from 'react';
import styled from 'styled-components';
import AnswerItem from '../AnswerItem/AnswerItem';

const AnswerSection = ({data}) => {
    return (
        <Container>
            <Title>Answers ( {data?.length} )</Title>
            <Answers>
                {
                   ( data?.length > 0 ) ? data.map((item,index )=> <AnswerItem key={index} data={item} />): ''
                }
            </Answers>
        </Container>
    );
};

export default AnswerSection;

const Container = styled.div`
    background: var(--background-secondary);
    margin-bottom: 30px;
`;
const Title = styled.h3`
    margin: 0px 20px;
    padding: 20px 0;
    font-size: 20px;
    color: var(--theme-primary);
    font-weight: 600;

    border-bottom: 2px solid #DEDEDE;
`;
const Answers = styled.div`

        > div {
            border-bottom: 1px solid #DEDEDE;

            &:last-child {
                border: none;
            }
        }

        

`;