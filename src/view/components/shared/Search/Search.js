import React from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

const Search = () => {
    return (
        <Container className="section-padding">
            <Wraper>
                <InputWraper>
                    <span>
                        <FaSearch size={18} color="#fff" />
                    </span>
                    <input type="text" placeholder='search here ...' />
                    <Button type="submit">Search</Button>
                </InputWraper>
            </Wraper>
        </Container>
    );
};

export default Search;

const Container = styled.div`
    margin: 35px 0px 30px;
`;
const Wraper = styled.form`

`;
const InputWraper = styled.div`
    position: relative;

    span{
        position: absolute;
        top: 10px;
        left: 10px;
        height: 28px;
        width: 28px;
        background: var(--theme-secondary);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    input{
        width: 100%;
        padding: 8px 100px 8px 46px;
        height: 48px;
        border: none;
        border-radius: 2px;
        font-size: 13px;

        &:focus{
            border: none;
            outline: none;

            color: var(--font-secondary);
            font-style: italic;
            font-weight: 600;
        }
        &::placeholder{
            color: var(--font-secondary);
            font-style: italic;
            font-weight: 600;
        }
       
    }
`;
const Button = styled.button`
    position: absolute;
    top: 8px;
    right: 10px;

    border: none;
    font-family: var(--font-primary);
    background: var(--theme-primary);
    padding: 7px 15px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
    transition: all .1s;

    &:hover{
        background: var(--theme-secondary);
    }
    
`;