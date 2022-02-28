import React from 'react';
import styled from 'styled-components';
import FollwoUs from './FollowUs/FollwoUs';
import PopularQuestion from './PopularQuestion/PopularQuestion';
import QuickLinks from './QuickLinks/QuickLinks';
import WhoWeAre from './WhoWeAre/WhoWeAre';

const Footer = () => {
    return (
        <Container>
            <Top  className='section-padding'>
                <WhoWeAre />
                <QuickLinks />
                <PopularQuestion />
                <FollwoUs />
            </Top>
            <Bottom  className='section-padding'>
                <CopyRightText>
                    Copyright 2022 Ask me | <a href="https://www.github.com/tusharahmmed" target="_blank">By Tushar</a>
                </CopyRightText>
            </Bottom>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
    
    background: var(--theme-secondary);
    color: #C2C6CA;
`;
const Top = styled.div`
    margin-top: 70px;
    padding-top: 50px;
    padding-bottom: 10px;
    display: grid;
    grid-template-columns: repeat(4,1fr);

    @media (max-width: 992px){
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        padding-bottom: 20px;
       }
    @media (max-width: 688px){
        grid-template-columns: 1fr;
        grid-row-gap: 40px;
        padding-bottom: 20px;
       }
`;
const Bottom = styled.div`
   padding-top: 16px;
   padding-bottom: 16px;
   background: #353940;
`;
const CopyRightText = styled.p`
   font-size: 13px;

   a{
       color: var(--theme-primary);
   }
   @media (max-width: 688px){
    text-align: center;
   }
`;