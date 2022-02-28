import React from 'react';
import { FaCalendar, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import styled from 'styled-components';
import parse from 'html-react-parser';

const AnswerItem = ({data}) => {

    return (
        <Wraper>

            <Thumbnail>
                <span>
                    <img src="/img/user-1.jpg" alt="" />
                </span>
            </Thumbnail>

            <AnswerDetails>

                <DetailsHeader>
                    <h4>{data?.answeredBy?.displayName}</h4>
                    <Statictis>
                        <LikeArea>
                            <span><FaRegThumbsUp size={12} /></span>
                            <span><FaRegThumbsDown size={12} /></span>
                            <span>120</span>
                        </LikeArea>
                        <Date>
                            <span><FaCalendar size={12} /> July 16, 2017 at 4:12 pm</span>
                        </Date>
                    </Statictis>
                </DetailsHeader>

                <DetailsDescription>{parse(data?.answerInHtml)}</DetailsDescription>

                <DetailsFooter>

                </DetailsFooter>

            </AnswerDetails>
        </Wraper>
    );
};

export default AnswerItem;




const Wraper = styled.div`
    padding: 20px;
    background: var(--background-secondary);

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
const AnswerDetails = styled.div`
    flex: 1;
`;
const DetailsHeader = styled.div`

    h4{
        color: var(--theme-secondary);
        size: 16px;
        font-weight: 600;
    }


    @media (max-width: 992px){
        margin-bottom: 15px;

        h2{
            font-size: 22px;
        }

    }
    @media (max-width: 688px){
        margin-bottom: 10px;
        h4{
            font-size: 14px;
        }

    }
`;

const Statictis = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
`;

const LikeArea = styled.div`
    color: var(--font-secondary);
    

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
            margin-left: 5px;
            background: none;
            font-size: 13px;
        }
    }
`;

const Date = styled.div`
    font-size: 13px;
    color: var(--font-secondary);
    margin-left: 15px;
`;

const DetailsDescription = styled.div`
    font-size: 15px;
    line-height: 30px;
    color: #2f3239;
    padding-bottom: 10px;
`;
const DetailsFooter = styled.div`
    display: flex;
    align-items: center;
`;