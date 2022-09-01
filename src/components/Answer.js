import React from "react";
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { saveAnswers } from "../reducers/quizzSlice";


export default function Answer(props) {
    let dispatch = useDispatch();
    console.log(props.data);

    function saveAnswer(question, answer) {
        dispatch(saveAnswers({ [question.id]: answer }));
    }

    function displayAnswers(){
        return props.data.map((question) => {
          return question.answers.map((item) => {
            return (
              <ReplyWrapper>
                <ReplyBox key={item.id} onClick={() => saveAnswer(question.id, item.content)}>{item.content}</ReplyBox>
              </ReplyWrapper>
          )})
        })
      }
    return (
        <div>
            {displayAnswers()}
        </div>
    );
}
const ReplyBox = styled.button`
      border: none;
      height: 100px;
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      cursor: pointer;
      box-shadow:
       &:first-child {
        margin-right: 15px;
      }
      &:last-of-type {
        margin-left: 15px;
      }
    `
    
    const ReplyWrapper = styled.div`
      display: flex;
      flex-direction: row;
    `