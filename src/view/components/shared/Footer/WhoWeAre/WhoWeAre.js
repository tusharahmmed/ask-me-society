import React from 'react';
import styled from 'styled-components';

const WhoWeAre = () => {
    return (
        <FooterWidged>
            
            <Title>Who We Are ?</Title>

            <ItemWraper>
                <Des>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi adipiscing gravida odio, sit amet suscipit risus ultrices eu.
                </Des>
            </ItemWraper>
            <ItemWraper>
                <ItemTitle>Address :</ItemTitle>
                <Des>
                    <span>Level-4, 34, Awal Centre, Dhaka</span>
                </Des>
            </ItemWraper>
            <ItemWraper>
                <ItemTitle>Support :</ItemTitle>
                <Des>
                    <span>Support Telephone No : (+2)01111011110</span>
                </Des>
                <Des>
                    <span>Support Email Account : info@example.com</span>
                </Des>
            </ItemWraper>

        </FooterWidged>
    );
};

export default WhoWeAre;

const FooterWidged = styled.div`
    padding: 0 15px;
`;
const ItemWraper = styled.div`

`;
const Title = styled.h4`
    color: var(--theme-primary);
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
`;
const ItemTitle = styled.h5`
    color: var(--theme-primary);
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 600;
`;
const Des = styled.p`
    margin-bottom: 20px;
    font-size: 13px;

    span{
        color: #fff;
    }
`;