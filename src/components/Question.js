import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import Error from "./Error";


export default function Question() {
    useEffect(() => {
        document.title = `quizz`
        fetchQuizz()
    }, [])

    const [data, setData] = useState()
    
    function fetchQuizz(){
      let url= `http://127.0.0.1:8000/api/quizz`;
      fetch(url, { method: 'GET'})
      .then((response) => {
          return response.json()
      })
      .then((data) => {
        console.log(data);
        return setData(data);
      })
    }
    function displayQuestion(id){
      return data.find(question => question.id == id).content
    }
  

  
    return (
      <div>
        { data ? (
        <QuestionContent>
          <h2>{displayQuestion(1)}</h2>
        </QuestionContent>
      ) : ( <div>ghs</div>)
        }
      </div>
    )
}

    const QuestionContent = styled.span`
      margin: 30px;
    `
    