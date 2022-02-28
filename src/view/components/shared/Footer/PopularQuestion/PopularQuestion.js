import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PopularQuestion = () => {
    return (
        <FooterWidged>
            <Title>Popular Questions</Title>
            <ItemWraper>

                <Post>
                    <Link to="/"><PostTitle>Why are the British confused</PostTitle></Link>
                    <PostDes>(Why I darest say, they darest not get offended when they so ...</PostDes>
                    <Date>July 16, 2017</Date>
                </Post>
                <Post>
                    <PostTitle>Why are the British confused</PostTitle>
                    <PostDes>(Why I darest say, they darest not get offended when they so ...</PostDes>
                    <Date>July 16, 2017</Date>
                </Post>
                <Post>
                    <PostTitle>Why are the British confused</PostTitle>
                    <PostDes>(Why I darest say, they darest not get offended when they so ...</PostDes>
                    <Date>July 16, 2017</Date>
                </Post>

            </ItemWraper>
        </FooterWidged>
    );
};

export default PopularQuestion;

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
const Post = styled.div`
   margin-bottom: 10px;
   border-bottom: 1px solid #c2c6ca2b;
   padding-bottom: 5px;
   
   &:last-child{
       border: none;
   }

`;
const PostTitle = styled.h5`
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  padding: 2px 0;
  transition: color .4s;

  &:hover{
      color: var(--theme-primary);
  }
`;
const PostDes = styled.p`
   font-size: 13px;
   margin: 5px 0;
`;
const Date = styled.p`
   padding: 5px 0;
   font-size: 12px;
   color: var(--theme-primary);
`;