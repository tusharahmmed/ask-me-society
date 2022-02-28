import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {

    const {user} = useAuth();

    return (
        <Container className='section-padding'>
            <Wraper>
                <LogoWraper>
                    <Link to="/">
                        <img src="/img/logo.png" alt="logo" />
                    </Link>
                </LogoWraper>
                <MenuWraper>
                    <span>
                        <Link to="/">Home</Link>
                        <Link to="/my-account/ask-question">Ask Question</Link>
                        <Link to="/">Blog</Link>
                        {
                            !user.email && <Link to="/account">Account</Link>
                        }
                        <Link to="/">Contact Us</Link>
                        {
                            user.email && <Link to="/my-account">Dashboard</Link>
                        }
                    </span>
                    <HumbergerIcon>
                        <FaBars color='#fff' size={20} />
                    </HumbergerIcon>
                </MenuWraper>
            </Wraper>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    background: var(--theme-secondary);
    height: 86px;
    
    display: flex;
    align-items: center;
    
`;
const Wraper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const LogoWraper = styled.div`

`;
const MenuWraper = styled.div`
    font-size: 15px;

    span{

         @media(max-width: 988px) {
            display: none;
        }
    }

    a{
        color: #fff;
        padding: 8px 15px;
        font-weight: 600;
        margin: 0 2px;
        border-radius: 2px;
        transition: all .1s;
        

        &:hover{
            background: var(--theme-primary);
        }
    }
`;


/**
 *  Mobile Menu
 */

const HumbergerIcon = styled.div`
    background: var(--theme-primary);
    padding: 7px 10px;
    border-radius: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(min-width: 988px){
        display: none;
    }
`;