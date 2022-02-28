import React from 'react';
import styled from 'styled-components';
import { FaQuestionCircle, FaComment, FaAsterisk, FaUserAlt } from 'react-icons/fa'

const Stats = () => {
    return (
        <Widged>
            <Title>Stats</Title>
            <StatsItem>
                <Icon><FaQuestionCircle color='#fff' size={13} /></Icon>
                <span>Questions ( 19 )</span>
            </StatsItem>
            <StatsItem>
                <Icon><FaComment color='#fff' size={12} /></Icon>
                <span>Answers ( 44 )</span>
            </StatsItem>
            <StatsItem>
                <Icon><FaAsterisk color='#fff' size={12} /></Icon>
                <span>Best Answers ( 4 )</span>
            </StatsItem>
            <a href="">
                <StatsItem>
                    <Icon><FaUserAlt color='#fff' size={12} /></Icon>
                    <span>Users ( 100 )</span>
                </StatsItem>
            </a>
        </Widged>
    );
};

export default Stats;

export const Widged = styled.div`
    background: var(--background-secondary);
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 1px 5px -1px rgb(0 0 0 / 13%);

    a{
    color: var(--font-primary);
    }
`;
export const Title = styled.h3`
    padding: 0px 0px 10px;
    font-size: 16px;
    color: var(--theme-primary);
    border-bottom: 2px solid #EAEAEB;
    margin-bottom: 20px;
    font-weight: 600;
`;
const StatsItem = styled.div`
    height: 46px;
    padding: 10px;
    margin-bottom: 11px;
    background: #EAEAEB;
    font-weight: 600;
    font-size: 14px;


    display: flex;
    align-items: center;

    
`;

const Icon = styled.span`
        height: 23px;
        width: 23px;
        background: var(--theme-secondary);
        margin-right: 9px;

        display: flex;
        align-items: center;
        justify-content: center;
`;