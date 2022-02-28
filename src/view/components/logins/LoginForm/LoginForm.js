import React from 'react';
import styled from 'styled-components';
import { FaUser, FaUnlockAlt } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const LoginForm = () => {

    // get auth
    const {handleLogin} = useAuth();

    // redirects afer registering
    let location = useLocation();
    let history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        if (data.password.length <= 5) {
            // swal(
            //     "Warning!",
            //     "Password should be at least 6 digits.",
            //      "warning",


            //   )
        } else {

            const { email, password } = data;
            handleLogin(email, password, location, history);


        }
    };



    return (
        <Wraper>

            <Title>Login</Title>
            <form onSubmit={handleSubmit(onSubmit)}>

                <InputWraper>
                    <span><FaUser color='var(--theme-primary)' size={19} /></span>
                    <input type="email" {...register("email", { required: true })} placeholder='Email' />
                </InputWraper>

                <InputWraper>
                    <span><FaUnlockAlt color='var(--theme-primary)' size={19} /></span>
                    <input type="password" {...register("password", { required: true })} placeholder='Password' />
                </InputWraper>

                <Button type='submit'>Log in</Button>
            </form>

        </Wraper>
    );
};

export default LoginForm;


const Wraper = styled.div`
    padding: 20px;
    background: var(--background-secondary);
    box-shadow: 0 1px 5px -1px rgb(0 0 0 / 13%);
    padding-bottom: 35px;
`;
const Title = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    color: var(--theme-primary);
    font-weight: 600;
    border-bottom: 2px solid #DEDEDE;

`;
const InputWraper = styled.div`

    position: relative;
    margin-bottom: 10px;

    span{
        position: absolute;
        top: 8px;
        left: 8px;
    }

    input{
        width: 100%;
        padding: 8px 8px 8px 37px;
        background: var(--background);
        border: none;
        line-height: 24px;
        color: var(--theme-primary);
        border-radius: 2px;

        &:focus{
            outline: 1px solid var(--theme-primary);
            
        }
        &::placeholder{
            color: gray;
            font-weight: 600;
        }
    }
`;
const Button = styled.button`
    width: 100%;
    background: var(--theme-primary);
    color: #fff;
    border: none;
    padding: 10px 0px;
    margin-top: 10px;
    border-radius: 2px;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;

`;