import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Error";
import { chooseColor } from "../../reducers/quizzSlice";

export default function Question1(props) {
    const data = props.data
    let dispatch = useDispatch();

    function setColor(color) {
        dispatch(chooseColor(color));
    }
    // let currentColor = useSelector((state) => state.quizzReducer.chooseColor.color );
    //
    function displayDiagonalLinks(){
        function btnLeft(id, content){
            return (
                <div type="submit" name="answer1" id={id} value={content} onClick={() => setColor(content)} class="btnAnswer1 triangleLeft" style="margin-top: 3px; margin-bottom: 0px;">
                    <div class="ButtonAnswer1"></div>
                </div>
            )
        }
        function btnRight(id, content){
            return (
                <div type="submit" name="answer1" id={id} value={content} onClick={() => setColor(content)} class="btnAnswer1 triangleRight" style="margin-top: 3px; margin-bottom: 0px;">
                    <div class="ButtonAnswer1"></div>
                </div>
            )
        }
        return data.map((question) => {
            if (question.id === props.urlParam) {
              return question.answers.map((item) => {
  
                  if (item.id == 1){
                      return btnRight(item.id, item.content)
                  }
                  else if(item.id == 2){
                      return btnLeft(item.id, item.content)
                  }
                  else{
                      <Error />
                  }
                return (
                    <div class="diagonalLinks">
                    <div class="diagonalIn">
                        {btnLeft(item.id, item.content)}
                        {btnRight(item.id, item.content)}
                    </div>
                </div>
              )})
            }
        })
    }

    function displayAnswers(){
        function answerRight(id, content){
            return(
                <div class="answerRight">
                    <div type="submit" name="answer1" id={id} value={content} onClick={() => setColor(content)} class="btnAnswer1 " style="margin-top: 3px; margin-bottom: 0px;">
                        <div class="ButtonAnswer1">{content}</div>
                    </div>
                </div>
            )
        }
        function answerLeft(id, content){
            return(
                <div class="answerLeft">
                    <div type="submit" name="answer1" id={id} value={content} onClick={() => setColor(content)} class="btnAnswer1 " style="margin-top: 3px; margin-bottom: 0px;">
                        <div class="ButtonAnswer1">{content}</div>
                    </div>
                </div>
            )
        }

        return data.map((question) => {
          if (question.id === props.urlParam) {
            return question.answers.map((item) => {

                if (item.id == 1){
                    return answerRight(item.id, item.content)
                }
                else if(item.id == 2){
                    return answerLeft(item.id, item.content)
                }
                else{
                    <Error />
                }
              return (
                <>
                    {answerLeft(item.id, item.content)}
                    {answerRight(item.id, item.content)}
                </>
            )})
          }  
        })
    }


    return (
        <div class="root">
            <div class="rootHead">
                <h1 class="questionTitle">{props.content}</h1>
            </div>
            <div class="diagonalBackground">
                <div class="diagonalRight"></div>
                <div class="diagonalLeft"></div>
            </div>
            <div class="polygons">
                <div class="polyLeft colorA">
                    <picture class="imageQ1">
                        <img src="./images/media/bgpolygons-white.77263344.svg" alt="polygones blancs" />
                    </picture>
                </div>
                <div class="polyRight colorB">
                    <picture class="imageQ1">
                        <img src="./images/media/bgpolygons-white.77263344.svg" alt="polygones noirs" />
                    </picture>
                </div>
            </div>
            <div class="cardWrapper">
                <div class="binaryCard">
                    <picture class="imageQ1">
                        <img class="img-fluid" src="./images/media/noir-blanc.png" alt="carte avec un coté noir et un coté blanc" />
                    </picture>
                    <form action="{{ path('app_quizz_type') }}" method="POST">
                        {displayDiagonalLinks()}
                        {displayAnswers()}
                    </form>
                </div>
            </div>
        </div>
    );
}