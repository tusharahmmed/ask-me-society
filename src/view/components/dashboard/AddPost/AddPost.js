import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import TextInputEditor from '../../questionDetails/TextInputEditor/TextInputEditor';

const AddPost = () => {

    const [editorText, setEditorText] = useState("");

    const {user} = useAuth();

    // extract text from html
    const extractContent = (s) => {
        var span = document.createElement('span');
        span.innerHTML = s;
        return span.textContent || span.innerText;
    }

    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const onSubmit = data => {

        //set editor data
        data.descriptionInHtml = editorText;
        data.descriptionInText = extractContent(editorText);

        // user create date
        let postTime = new Date();
        data.postTime = postTime;

        // add user details
        const userData = {email: user.email,displayName: user.displayName};
        data.postBy = userData;

        // console.log(data);

        // alert for confimation
        swal({
            title: "Are you sure?",
            text: "Once created, your post will seen by everyone!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            answers: []
        })
            .then((publishePost) => {

                // confirmation
                if (publishePost) {

                    // create post to database
                    axios({
                        method: 'post',
                        url: 'https://boiling-mountain-38060.herokuapp.com/add-post',
                        data: data
                    })
                        .then(data => {
                            console.log(data);

                            // show confirmation
                            if (data.status === 200) {
                                swal("Poof! You post has been successfully pulished!.", {
                                    icon: "success",
                                    buttons: false,
                                    timer: 1000
                                });

                                // clear text
                                setEditorText("");
                                reset();
                            }
                        });

                } else {
                    // if cancel promp
                    swal("Your post not published yet!", {
                        buttons: false,
                        timer: 1000
                    });
                }
            });
    };




    return (
        <Wraper>
            <Title>Add Question</Title>

            <form onSubmit={handleSubmit(onSubmit)}>

                <InputWraper>
                    <Label>Question Title <span>*</span></Label>
                    <input type="text" {...register("postTitle", { required: true })} />
                </InputWraper>

                <InputWraper>
                    <Label>Details <span>*</span></Label>

                    <span>
                        <TextInputEditor editorText={editorText} setEditorText={setEditorText} />
                        <PostBtn type='submit'>Post Your Answer</PostBtn>
                    </span>

                </InputWraper>

            </form>
        </Wraper>
    );
};

export default AddPost;


const Wraper = styled.div`
    background: var(--background-secondary);
    padding: 20px 20px 0px;
    box-shadow: 0 1px 5px -1px rgb(0 0 0 / 13%);
    margin-right: 30px;
    margin-top: -60px;

    @media(max-width: 992px){
        margin-top: 0px;
        margin-right: 0px;
    }
`;
const Title = styled.h2`
    font-size: 20px;
    color: var(--theme-primary);
    padding: 20px 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid #dedede;

`;
const InputWraper = styled.div`
    margin-bottom: 30px;

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
const Label = styled.label`
    margin-bottom: 10px;
    display: inline-block;
    color: var(--font-secondary);
    span{
        color: var(--theme-primary);
    }
`;


const PostBtn = styled.button`
    width: 100%;
    text-align: center;
    background: var(--theme-primary);
    color: #fff;
    border: none;
    padding: 10px 0px;
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 2px;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    
`;