import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../../../../hooks/useAuth';

const RegisterForm = () => {

    // get auth
    const { registerUser } = useAuth();

    // redirects afer registering
    let location = useLocation();
    let history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // handle submit
    const onSubmit = data => {

        // join full Name
        const fullName = `${data['fName']} ${data['lName']}`
        data.fullName = fullName;

        if (data.password.length <= 5) {
            alert('pas')
        } else {

            // create user to firebase
            const { email, password, fullName } = data;
            registerUser(email, password, fullName, location, history);

            // create user to database
            axios({
                method: 'post',
                url: 'https://boiling-mountain-38060.herokuapp.com/create-user',
                data: { email, fName: data.fName, lName: data.lName, fullName }
            })
                .then(data => {
                    console.log(data);

                    if (!data.status === 200) {
                        alert('something went wrong!')
                    }
                });

        }
    };


    return (
        <Wraper>
            <Title>Register</Title>
            <form onSubmit={handleSubmit(onSubmit)}>

                <InputWraper>
                    <Label>Fast Name <span>*</span></Label>
                    <input type="text" {...register("fName", { required: true })} />
                </InputWraper>

                <InputWraper>
                    <Label>Last Name <span>*</span></Label>
                    <input type="text" {...register("lName", { required: true })} />
                </InputWraper>

                <InputWraper>
                    <Label>Email <span>*</span></Label>
                    <input type="email" {...register("email", { required: true })} />
                </InputWraper>

                <InputWraper>
                    <Label>Password <span>*</span></Label>
                    <input type="password" {...register("password", { required: true })} />
                </InputWraper>
                <Button type='submit'>Signup</Button>
            </form>
        </Wraper>
    );
};

export default RegisterForm;

const Wraper = styled.div`

    form{
        padding: 20px;
        background: var(--theme-primary);
        box-shadow: 0 1px 5px -1px rgb(0 0 0 / 13%);

    }
`;
const Title = styled.span`
    padding: 10px 16px 11px;
    color: #fff;
    background: var(--theme-primary);
    display: inline-block;
    margin-bottom: 2px;
`;
const InputWraper = styled.div`
    margin-bottom: 10px;

    input{
        width: 100%;
        padding: 8px 8px 8px 8px;
        background: var(--background);
        border: none;
        line-height: 24px;
        color: var(--theme-primary);
        border-radius: 2px;

        &:focus{
            border: none;
            outline: none;
            
        }
    }
`;
const Label = styled.div`
    color: #fff;
    font-size: 14px;
    margin: 5px 0;

    span{
        color: var(--theme-secondary);
    }
`;

const Button = styled.button`
    width: 100%;
    background: var(--theme-secondary);
    color: #fff;
    border: none;
    padding: 10px 0px;
    margin-top: 10px;
    border-radius: 2px;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
`;