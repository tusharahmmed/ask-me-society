import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuickLinks = () => {
    return (
        <FooterWidged>
            <Title>Quick Links</Title>
            <Item>
                <Link to="/">
                    <LinkName>- Home</LinkName>
                </Link>
            </Item>
            <Item>
                <Link to="/a">
                    <LinkName>- Ask Question</LinkName>
                </Link>
            </Item>
            <Item>
                <Link to="/a">
                    <LinkName>- Blog</LinkName>
                </Link>
            </Item>
            <Item>
                <Link to="/a">
                    <LinkName>- Account</LinkName>
                </Link>
            </Item>
            <Item>
                <Link to="/a">
                    <LinkName>- Contact Us</LinkName>
                </Link>
            </Item>
            

        </FooterWidged>
    );
};

export default QuickLinks;



const FooterWidged = styled.div`
    padding: 0 15px;
`;
const Item = styled.div`

`;

const Title = styled.h4`
    color: var(--theme-primary);
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
`;

const LinkName = styled.p`
    padding: 7px 0;
    font-size: 13px;
    color: #C2C6CA;
    border-bottom: 1px solid #c2c6ca2b;
    transition: all .4s;
    
    &:hover{
        color: #fff;
    }
`;