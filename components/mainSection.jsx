// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import React, { useState } from "react";

import AnswerBar from "./answerBar";
import Questionaire from "./questionaire";

const MainSection = () => {
  const [index, setIndex] = useState(0);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [result, setResult] = useState(0);
  const [resultPrompt, setResultPrompt] = useState("null");
  const [resultPageLoad, setResultPageLoad] = useState(false);
  const [questions, setQuestions] = useState([
    "Being tired",
    "Feeling depressed",
    "Having a good day",
    "Being physically exhausted",
    "Being emotionally exhausted",
    "Being happy",
    `Being “wiped out”`,
    `“Can’t take it anymore”`,
    "Being unhappy",
    "Feeling run-down",
    "Feeling trapped",
    "Feeling worthless",
    "Being weary",
    "Being troubled",
    "Feeling disillusioned and resentful",
    "Being weak and susceptible to illness",
    "Feeling hopeless",
    "Feeling rejected",
    "Feeling optimistic",
    "Feeling energetic",
    "Feeling anxious",
  ]);
  const [selected, setSelected] = useState(0);
  const updateSelected = (key) => {
    setSelected(key);
    console.log(key);
  };

  const updateIndex = () => {
    let temp = index + 1;
    setIndex(temp);
  };

  const onNext = () => {
    const tempSelected = selected;
    let tempIndex = index;
    if (tempIndex == 20) {
      let tempResult = (bad + (32 - good)) / 21;
      if (tempResult < 3) {
        setResultPrompt("you are doing Good");
      } else if (tempResult >= 3 && tempResult < 4) {
        setResultPrompt(
          " it would be wise for you to examine your work and life, evaluate your priorities and consider possible changes."
        );
      } else if (tempResult >= 4 && tempResult < 5) {
        setResultPrompt(
          "you are experiencing burnout to the extent that it is mandatory that you do something about it."
        );
      } else if (tempResult > 5) {
        setResultPrompt(
          "indicates an acute state and a need for immediate help."
        );
      }
      tempResult = Math.round(tempResult * 100) / 100;
      setResult(tempResult);
      setResultPageLoad(true);
    } else {
      if (tempSelected > 0) {
        if (
          tempIndex == 2 ||
          tempIndex == 5 ||
          tempIndex == 18 ||
          tempIndex == 19
        ) {
          let temp = good + tempSelected;
          setGood(temp);
          console.log("good", temp);
        } else {
          let temp = bad + tempSelected;
          setBad(temp);
          console.log("bad", temp);
        }
        updateSelected(0);
        updateIndex();
      } else {
        alert("choose an answer");
      }
    }
  };

  return (
    <div>
      {!resultPageLoad ? (
        <div>
          <div
            css={css`
              display: flex;
              flex-flow: column;
              background: #101010;
              width: 100%;
              height: 100%;
            `}
          >
            <Questionaire questions={questions} index={index} />
          </div>
          <div
            css={css`
              margin-top: 64px;
            `}
          >
            <AnswerBar updateSelected={updateSelected} selected={selected} />
          </div>
          <div
            css={css`
              margin: 120px 0 0 0;
              right: 0;
              display: flex;
              align-items: center;
              justify-content: flex-end;
            `}
          >
            <button
              css={css`
                right: 0;
                background-color: #202022;
                border: 0;
                border-radius: 8px;
                padding: 2px 56px;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: center;
              `}
              onClick={() => onNext()}
            >
              <h1
                css={css`
                  font-family: Avenir;
                  font-style: normal;
                  font-weight: 850;
                  font-size: 24px;
                  line-height: 37px;
                  display: flex;
                  align-items: center;
                  text-align: center;
                  margin: 0 12px 0 0;
                  color: #ffffff;
                `}
              >
                Next
              </h1>
              <Image alt="" height={20} width={20} src="/next.svg" />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <h1
              css={css`
                font-family: Avenir;
                font-style: normal;
                font-weight: 850;
                font-size: 36px;
                line-height: 56px;
                letter-spacing: 0.02em;
                margin: 0;
                color: #ffffff;
              `}
            >
              {`Your Burn Out Score is ${result}`}
            </h1>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <div>
              <h1
                css={css`
                  font-family: Avenir;
                  font-style: normal;
                  font-weight: 850;
                  font-size: 24px;
                  line-height: 75px;
                  margin: 0;
                  letter-spacing: 0.02em;
                  color: rgba(255, 255, 255, 0.6);
                `}
              >
                {resultPrompt}
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
