import React from 'react';
import styled from 'styled-components';
import { HiOutlineHome } from 'react-icons/hi'
import { MdLogout } from 'react-icons/md'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { FaUserAlt, FaPlus, FaRegCommentDots, FaQuestion } from 'react-icons/fa'
import { AddPost, HomeBoard } from '.';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {

    let { path, url } = useRouteMatch();

    // get auth
    const {logOut} = useAuth();

    return (
        <Container>
            <Wraper>
                <LeftContent>
                    <Logo>
                        <Link to="">
                            <img src="/img/logo.png" alt="" />
                        </Link>
                    </Logo>

                    <MenuWraper>
                        <Link to={`${url}`}>
                            <p> <span><HiOutlineHome size={18} /></span> Dashboard</p>
                        </Link>
                        <Link to={`${url}/profile`}>
                            <p><span><FaUserAlt size={18} /></span> Profile</p>
                        </Link>
                        <Link to={`${url}/ask-question`}>
                            <p><span><FaPlus size={18} /></span> Ask Question</p>
                        </Link>
                        <Link to={`${url}/posts`}>
                            <p><span><FaQuestion size={18} /></span>My Posts</p>
                        </Link>
                        <Link to={`${url}/answers`}>
                            <p><span><FaRegCommentDots size={18} /></span>Given Answers</p>
                        </Link>
                        
                            <p onClick={logOut}><span><MdLogout size={18} /></span>Log Out</p>
                        
                    </MenuWraper>

                </LeftContent>
                <RightContent>

                    <Switch>

                        <Route exact path={`${path}`}>
                            <HomeBoard />
                        </Route>

                        <Route exact path={`${path}/ask-question`}>
                            <AddPost />
                        </Route>

                    </Switch>

                </RightContent>
            </Wraper>
        </Container>
    );
};

export default Dashboard;



const Container = styled.div`
     background: #F8F8F8;
`;

const Wraper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 30px;
    margin-bottom: -70px;

    @media (max-width: 1200px){
        grid-template-columns: 1fr 3fr;
    }
    @media (max-width: 992px){
     grid-template-columns: 1fr;
    }

`;

const LeftContent = styled.div`
    background: #160F3F;
    height: 100vh;
    
    @media (max-width: 992px){
     height: auto;
     padding-bottom: 30px;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0 20px;
    margin: 0 20px;
    
    border-bottom: 2px solid #80808054;
`;
const MenuWraper = styled.div`
    padding-left: 30px;
    margin-top: 30px;

    a{
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
    }

    p{
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        background: #1B174D;
        color: #9AA8BD;
        padding: 10px;
        margin-bottom: 15px;
        padding-left: 40px;
        cursor: pointer;
        transition: color .4s;

        display: flex;
        align-items: center;

        span{
            margin-right: 15px;
        }
        &:hover{
            color: white;
        }
    }
`;
const RightContent = styled.div`
    padding-top: 80px;
    
    @media (max-width: 992px){
     padding: 30px;
    }
`;