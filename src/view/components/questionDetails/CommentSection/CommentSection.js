import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import TextInputEditor from '../TextInputEditor/TextInputEditor';

const CommentSection = ({postId,setAnswers}) => {

    const [editorText, setEditorText] = useState("");

    // get user
    const {user} = useAuth();

    const commentSubmit = comentText => {

        // extract text from html
        const extractContent = (s) => {
            var span = document.createElement('span');
            span.innerHTML = s;
            return span.textContent || span.innerText;
        }

        // insert user
        const userData = {email: user.email,displayName: user.displayName};
        
        // insert answerd time
        let date = new Date();

        const data = {
            answerInHtml: comentText,
            answeredBy: userData,
            answeredTime: date
        }

        // alert for confimation
        swal({
            title: "Are you sure?",
            text: "Once commented, all user will can see your comment!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((publishComment) => {

                // confirmation
                if (publishComment) {

                    // create post to database
                    axios({
                        method: 'post',
                        url: `https://boiling-mountain-38060.herokuapp.com/submit-answer/${postId}`,
                        data: data
                    })
                        .then(data => {

                            // show confirmation
                            if (data.status === 200) {
                                swal("Poof! You post has been successfully pulished!.", {
                                    icon: "success",
                                    buttons: false,
                                    timer: 1000
                                });

                                // clear text
                                setEditorText("");

                                // update answer
                                setAnswers([]);
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

    }





    return (
        <Container>
            <Title>Leave An Answer</Title>
            <CommentArea>
                <TextInputEditor setEditorText={setEditorText} editorText={editorText} />
                <PostBtn onClick={()=>commentSubmit(editorText)}>Post Your Answer</PostBtn>
            </CommentArea>
        </Container>
    );
};

export default CommentSection;


const Container = styled.div`
    background: var(--background-secondary);
`;
const Title = styled.h3`
    margin: 0px 20px;
    padding: 20px 0;
    font-size: 20px;
    color: var(--theme-primary);
    font-weight: 600;

    border-bottom: 2px solid #DEDEDE;
`;

const CommentArea = styled.div`
 padding-bottom: 10px;
 margin: 20px;
`;

const PostBtn = styled.div`
    width: 100%;
    text-align: center;
    background: var(--theme-primary);
    color: #fff;
    border: none;
    padding: 10px 0px;
    margin-top: 25px;
    margin-bottom: 30px;
    border-radius: 2px;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    
`;
