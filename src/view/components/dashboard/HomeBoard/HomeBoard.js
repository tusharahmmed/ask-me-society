import React from 'react';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';


const HomeBoard = () => {
    return (
        <Container>
            <Title><span><FaHome color='#60A9CD' /></span> Dashboard</Title>

            <StatsSection>

                <StatsItem>
                    <ItemTitle>Total Question</ItemTitle>
                    <Data>56</Data>
                </StatsItem>

                <StatsItem>
                    <ItemTitle>Total Question</ItemTitle>
                    <Data>56</Data>
                </StatsItem>

                <StatsItem>
                    <ItemTitle>Total Question</ItemTitle>
                    <Data>56</Data>
                </StatsItem>

                <StatsItem>
                    <ItemTitle>Total Question</ItemTitle>
                    <Data>56</Data>
                </StatsItem>

            </StatsSection>

        </Container>
    );
};

export default HomeBoard;


const Container = styled.div`
    margin-right: 30px;
`;
const Title = styled.h2`
    color: #27244B;
`;
const StatsSection = styled.div`
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 30px;

    
    @media (max-width: 1200px){
     grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 992px){
     grid-template-columns: 1fr;
    }
`;
const StatsItem = styled.div`
    height: 150px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 1px 5px -1px rgb(0 0 0 / 13%);

`;
const ItemTitle = styled.p`
    color: var(--font-secondary);
`;
const Data = styled.h3`
    font-size: 30px;
    color: #27244B;
    margin-top: 10px;

`;