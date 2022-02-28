import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AnswerSection from './AnswerSection/AnswerSection';
import CommentSection from './CommentSection/CommentSection';
import PostBy from './PostBy/PostBy';
import PostDetails from './PostDetails/PostDetails';

const QuestionDetails = () => {

    // state
    const [questionDetails,setQuestionDetails] = useState({});
    const [answers,setAnswers] = useState([]);
    const {id} = useParams();
    
    // load details
    useEffect(()=>{
        axios({
            method: 'get',
            url: `https://boiling-mountain-38060.herokuapp.com/question-details/${id}`
        })
        .then(result => {
            setQuestionDetails(result.data);
            setAnswers(result.data?.answers);
        });
    },[answers]);
    
    // need to fix it
    // console.log(questionDetails);
    
    return (
        <Container>

            <PostDetails data={questionDetails}/>

            <PostBy data={questionDetails?.postBy} />

            {
               ( answers.length > 0) ? <AnswerSection data={answers} /> : ""
            }

            <CommentSection postId={id} setAnswers={setAnswers} />

        </Container>
    );
};

export default QuestionDetails;

const Container = styled.div`

`;