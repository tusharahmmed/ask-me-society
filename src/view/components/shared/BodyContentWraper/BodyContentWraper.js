import React from 'react';
import styled from 'styled-components';

const BodyContentWraper = () => {
    return (
        <Container>
            <Wraper>
                <LeftContent>

                </LeftContent>
                <RightContent>
                   

                </RightContent>
            </Wraper>
        </Container>
    );
};

export default BodyContentWraper;


export const Container = styled.div`

`;

export const Wraper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 30px;

    @media (max-width: 1200px){
        
    }
    @media (max-width: 992px){
     grid-template-columns: 1fr;
    }

`;

export const LeftContent = styled.div`

`;
export const RightContent = styled.div`

`;

