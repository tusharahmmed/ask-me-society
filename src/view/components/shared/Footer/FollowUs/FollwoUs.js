import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebook,FaLinkedinIn } from 'react-icons/fa';

const FollwoUs = () => {
    return (
        <FooterWidged>
            <Title>@Follow Us</Title>

            <ItemWraper>
                <Icon>
                    <FaTwitter color='var(--theme-primary)' size={12} />
                </Icon>
                <SocialPost>
                    <Description>
                        <span>@ask-me</span> Check a new update on Twitter for more Info visit: <span>https://twitter.com</span>
                    </Description>
                    <Date>about 2 weeks ago</Date>
                </SocialPost>
            </ItemWraper>
            <ItemWraper>
                <Icon>
                    <FaFacebook color='var(--theme-primary)' size={12} />
                </Icon>
                <SocialPost>
                    <Description>
                        <span>ask-me</span> Check a new update on Facebook for more Info visit: <span>https://facebook.com</span>
                    </Description>
                    <Date>about 2 weeks ago</Date>
                </SocialPost>
            </ItemWraper>
            <ItemWraper>
                <Icon>
                    <FaLinkedinIn color='var(--theme-primary)' size={12} />
                </Icon>
                <SocialPost>
                    <Description>
                        <span>ask-me</span> Check a new update on Linkedin for more Info visit: <span>https://linkedin.com</span>
                    </Description>
                    <Date>about 2 weeks ago</Date>
                </SocialPost>
            </ItemWraper>

        </FooterWidged>
    );
};

export default FollwoUs;

const FooterWidged = styled.div`
    padding: 0 15px;
`;
const ItemWraper = styled.div`
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #c2c6ca2b;
    padding-bottom: 15px;

    &:last-child{
        border: none;
    }
`;
const Title = styled.h4`
    color: var(--theme-primary);
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
`;
const Icon = styled.div`

`;
const SocialPost = styled.div`
   margin-left: 10px;
   font-size: 13px;
   
   span{
       color: #fff;
   }
`;
const Description = styled.p`
   margin-bottom: 5px;
`;
const Date = styled.p`
   font-size: 11px;
`;