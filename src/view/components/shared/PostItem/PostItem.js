import React from 'react';
import styled from 'styled-components';
import {FaCheck,FaStar,FaCalendar,FaComments,} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PostItem = ({data}) => {

    return (
        <Container>
            <Thumbnail>
                <span>
                    <img src="/img/user-1.jpg" alt="" />
                </span>
            </Thumbnail>
            <PostDetails>
                <PostHeader>
                    <Link to={`/question/${data?._id}`}><h2>{data?.postTitle}</h2></Link>
                    <button>Report</button>
                </PostHeader>
                <PostDescription>{data?.descriptionInText}</PostDescription>

                <PostFooter>

                    <StatsWraper color='green'>
                        <FaCheck size={12} /> <span>Solved</span>
                    </StatsWraper>
                    <StatsWraper color="gold">
                        <FaStar /> <span>48</span>
                    </StatsWraper>
                    <StatsWraper>
                        <FaCalendar color='#2F3239' /> <span>3 days</span>
                    </StatsWraper>
                    <StatsWraper>
                        <FaComments color='#2F3239' /> <span>6 Answers</span>
                    </StatsWraper>

                </PostFooter>

            </PostDetails>
        </Container>
    );
};

export default PostItem;

const Container = styled.div`
    margin-bottom: 30px;
    padding: 20px;
    background: var(--background-secondary);
    box-shadow: 0 1px 5px -1px rgb(0 0 0 / 13%);

    display: flex;

    @media (max-width: 600px){
        flex-direction: column;
    }
`;
const Thumbnail = styled.div`

   margin-right: 30px;
    span img{
        padding: 2px;
        border: 2px solid #80808026;
        border-radius: 999px;
    }
`;
const PostDetails = styled.div`
    flex: 1;
`;
const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    h2{
        color: var(--theme-secondary);
        size: 22px;
        font-weight: 600;
        transition: .4s;

        &:hover{
            color: var(--theme-primary);
        }
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
const PostDescription = styled.p`
    font-size: 15px;
    line-height: 30px;
    color: var(--font-secondary);
    padding-bottom: 30px;
    border-bottom: 2px solid var(--background);
`;
const PostFooter = styled.div`
    display: flex;
    padding-top: 15px; 
`;
const StatsWraper = styled.div`
    margin-right: 20px;
    font-size: 13px;

    color: ${(props)=> props.color? props.color : 'var(--font-secondary)'};
`;