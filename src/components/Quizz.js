import React from "react";
import { useEffect, useState } from 'react';
import { saveAnswers } from "../reducers/quizzSlice";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import Error from "./Error";
import Question1 from "./Questions/Question1";
import Question2 from "./Questions/Question2";
import Question3 from "./Questions/Question3";
import Question4 from "./Questions/Question4";
import Question5 from "./Questions/Question5";


export default function Quizz() {
    useEffect(() => {
        document.title = `Créer le votre`
        fetchQuizz()
    }, [])

    const [data, setData] = useState([])
    function fetchQuizz(){
      let url= `http://127.0.0.1:8000/api/questions?page=1`;
      fetch(url, { method: 'GET'})
      .then((response) => {
          return response.json()
      })
      .then((data) => {
        console.log(data["hydra:member"])
        return setData(data["hydra:member"]);
      })
    }

    let dispatch = useDispatch();
    console.log(data);

    // function saveAnswer(question, answer) {
    //     dispatch(saveAnswers({ [question]: answer }));
    // }
    
    function displayQuestion(){
        return data.map((question) => {
          if (question.id === questionNumberInt) {
            switch (question.id) {
              case 1:
                return <Question1 question={question.content} answers={question.answers} urlParam={questionNumberInt} data={data} />
                break;
              case 2:
                return <Question2 question={question.content} answers={question.answers} urlParam={questionNumberInt} data={data} />
                break;
              case 3:
                return <Question3 question={question.content} answers={question.answers} urlParam={questionNumberInt} data={data} />
                break;
              case 4:
                return <Question4 question={question.content} answers={question.answers} urlParam={questionNumberInt} data={data} />
                break;
              case 5:
                return <Question5 question={question.content} answers={question.answers} urlParam={questionNumberInt} data={data} />
                break;
              default:
                break;
            }
            // return (
            //   <QuestionContent>
            //     <h2 key={question.id}>{question.content}</h2>
            //   </QuestionContent>
            // )
          } 
        })
    }
    // function displayAnswers(){
    //   return data.map((question) => {
    //     if (question.id === questionNumberInt) {
    //       return question.answers.map((item) => {
    //         return (
    //           <ReplyWrapper>
    //             <ReplyBox key={item.id} onClick={() => saveAnswer(question.id, item.content)}>{item.content}</ReplyBox>
    //           </ReplyWrapper>
    //       )})
    //     }
    //   })
    // }
    const { questionNumber } = useParams()
    console.log(questionNumber)
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    return (
      <div>
      { data ? (
        <div>
          {displayQuestion()}

          {/* {displayAnswers()} */}
          
          <LinkWrapper>
            <Link to={`/quizz/${prevQuestionNumber}`}>Précédent</Link>
          {data && data[questionNumberInt + 1] ? (
            <Link to={`/quizz/${nextQuestionNumber}`}>Suivant</Link>
          ) : (
            <Link to="/quizz/results">Résultats</Link>
          )}
          </LinkWrapper>
        </div>
      ):(
        <div>
          <Error />
        </div>
      )
      }
    </div>
     );
        
    
}




    const LinkWrapper = styled.div`
      padding-top: 30px;
      & a:first-of-type {
        margin-right: 20px;
      }
    `
    const QuestionContent = styled.span`
      margin: 30px;
    `
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