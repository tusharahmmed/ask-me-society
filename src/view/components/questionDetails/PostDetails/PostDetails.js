import React from 'react';
import { FaCalendar, FaCheck, FaComments, FaRegThumbsDown, FaRegThumbsUp, FaStar, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import parse from 'html-react-parser';

const PostDetails = ({data}) => {


    return (

        <Wraper>
            <PostHeader>
                <Link to="/question"><h2>{data?.postTitle}</h2></Link>
                <button>Report</button>
            </PostHeader>
            <PostDescription>{parse(`${data?.descriptionInHtml}`)}</PostDescription>

            <PostFooter>

                <StatsWraper color='green'>
                    <FaCheck size={12} /> <span>Solved</span>
                </StatsWraper>
                <StatsWraper color="gold">
                    <FaStar /> <span>48</span>
                </StatsWraper>
                <StatsWraper color="#2F3239">
                    <FaUser /> <span>{data?.postBy?.displayName}</span>
                </StatsWraper>
                <StatsWraper>
                    <FaCalendar color='#2F3239' /> <span>3 days</span>
                </StatsWraper>
                <StatsWraper>
                    <FaComments color='#2F3239' /> <span>6 Answers</span>
                </StatsWraper>

                <LikeArea>
                    <span><FaRegThumbsUp size={12} /></span>
                    <span><FaRegThumbsDown size={12} /></span>
                    <span>120</span>
                </LikeArea>

            </PostFooter>

        </Wraper>

    );
};

export default PostDetails;


const Wraper = styled.div`
    background: #fff;
    padding: 20px;
`;
const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    h2{
        color: var(--theme-secondary);
        size: 22px;
        font-weight: 600;
    }

    button{
        height: 23px;
        padding: 0px 16px;
        font-size: 12px;
        background: var(--theme-secondary);
        color: #fff;
        border: none;
        cursor: pointer;

    }


    @media (max-width: 992px){
        margin-bottom: 25px;

        h2{
            font-size: 22px;
        }

    }
    @media (max-width: 688px){
        margin-bottom: 25px;

        h2{
            font-size: 19px;
        }
        button{
            margin-top: 3px;
        }

    }
`;
const PostDescription = styled.div`
    font-size: 15px;
    line-height: 30px;
    color: var(--font-secondary);
    padding-bottom: 30px;
    border-bottom: 2px solid var(--background);
`;
const PostFooter = styled.div`
    display: flex;
    padding-top: 15px; 
    position: relative;

    @media(max-width: 600px){
        flex-direction: column;
    }
`;
const StatsWraper = styled.div`
    margin-right: 20px;
    font-size: 13px;
    cursor: pointer;
    color: ${(props) => props.color ? props.color : 'var(--font-secondary)'};

    span{
        &:hover{
            color: var(--theme-primary);

        }
    }

    @media(max-width: 600px){
        margin-bottom: 10px;
    }

`;

const LikeArea = styled.div`
    color: var(--font-secondary);
    position: absolute;
    bottom: 0px;
    right: 10px;

    span{
        display: inline-block;
        margin-left: 5px;
        background: #8080801f;
        padding: 0px 4px;
        cursor: pointer;
        transition: all 1s;

        &:nth-child(1){
            &:hover{
                background: green;
                color: #fff;
            }
        }
        &:nth-child(2){
            &:hover{
                background: red;
                color: #fff;
            }
        }
        &:last-child{
            margin-left: 10px;
            background: none;
        }
    }
`;