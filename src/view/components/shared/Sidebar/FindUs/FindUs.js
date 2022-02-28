import React from 'react';
import styled from 'styled-components';
import { Widged, Title } from '../Stats/Stats';
import { FaRss,FaFacebookF,FaTwitter ,FaPlay} from 'react-icons/fa';

const FindUs = () => {
    return (
        <Widged>
            <Title>Find Us</Title>

            <SocialItem bg="#FAA33D">
                <ItemText>
                    <p>Subscribe</p>
                    <p>To RSS Feed</p>
                </ItemText>
                <Icon>
                    <FaRss color='#fff' size={33} />
                </Icon>
            </SocialItem>

            <SocialItem bg="#5D82D1">
                <ItemText>
                    <p>0</p>
                    <p>Fans</p>
                </ItemText>
                <Icon>
                    <FaFacebookF color='#fff' size={33} />
                </Icon>
            </SocialItem>

            <SocialItem bg="#3B96BE">
                <ItemText>
                    <p>52</p>
                    <p>Followers</p>
                </ItemText>
                <Icon>
                    <FaTwitter color='#fff' size={33} />
                </Icon>
            </SocialItem>

            <SocialItem bg="#C4302B">
                <ItemText>
                    <p>493</p>
                    <p>Subscribers</p>
                </ItemText>
                <Icon>
                    <FaPlay color='#fff' size={33} />
                </Icon>
            </SocialItem>

        </Widged>
    );
};

export default FindUs;

const SocialItem = styled.div`
    padding: 13px 10px;
    margin-bottom: 11px;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    height: 75px;
    background: ${props => props.bg};
    transition: all .5s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover{
        background: var(--theme-secondary);
    }
`;

const ItemText = styled.div`

`;
const Icon = styled.div`

`;