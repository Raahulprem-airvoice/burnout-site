// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import React, { useState } from "react";
import { PopupButton, Widget } from "@typeform/embed-react";

import AnswerBar from "./answerBar";
import Questionaire from "./questionaire";

const MainSection = () => {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [result, setResult] = useState({});
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
      tempResult = Math.round(tempResult * 100) / 100;
      if (tempResult < 3) {
        setResult({
          value: tempResult,
          emoji: "/face/smiling-face-with-halo.svg",
          color: "#76e250",
          prompt: "You are doing Good",
        });
      } else if (tempResult >= 3 && tempResult < 4) {
        setResult({
          value: tempResult,
          emoji: "/face/grimacing-face.svg",
          color: "#e2dc50",
          prompt:
            " It would be wise for you to examine your work and life, evaluate your priorities and consider possible changes.",
        });
      } else if (tempResult >= 4 && tempResult < 5) {
        setResult({
          value: tempResult,
          emoji: "/face/face-with-spiral-eyes.svg",
          color: "#fd4931",
          prompt:
            "You are experiencing burnout to the extent that it is mandatory that you do something about it.",
        });
      } else if (tempResult > 5) {
        setResult({
          value: tempResult,
          emoji: "/face/dizzy-face.svg",
          color: "#ff3115",
          prompt: "Indicates an acute state and a need for immediate help.",
        });
      }

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
    <>
      {!started ? (
        <>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              flex-flow: column;
              background: #101010;
              width: 100%;
              height: 100%;
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                flex-flow: row wrap;
                background: #101010;
                width: 100%;
                height: 100%;
              `}
            >
              <h1
                css={css`
                  @media (max-width: 640px) {
                    font-size: 28px;
                  }
                  font-family: Avenir;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 36px;
                  line-height: 49px;
                  margin: 0;
                  color: #ffffff;
                `}
              >
                How
              </h1>
              <h1
                css={css`
                  @media (max-width: 640px) {
                    font-size: 28px;
                  }
                  font-family: Avenir;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 36px;
                  line-height: 49px;
                  margin: 0 8px;
                  color: #e25050;
                `}
              >
                burnt out
              </h1>
              <h1
                css={css`
                  @media (max-width: 640px) {
                    font-size: 28px;
                  }
                  font-family: Avenir;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 36px;
                  line-height: 49px;
                  margin: 0;
                  color: #ffffff;
                `}
              >
                are you?
              </h1>
            </div>
            <div
              css={css`
                @media (max-width: 640px) {
                  width: 80%;
                }
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 72px;
                flex-flow: row wrap;
                background: #101010;
                width: 100%;
                height: 100%;
              `}
            >
              <Image alt="" height={301} width={536} src="/landingImage.svg" />
            </div>
            <div
              css={css`
                @media (max-width: 640px) {
                  width: 90%;
                }
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 36px;
                flex-flow: row wrap;
                background: #101010;
                width: 70%;
                text-align: center;
                height: 100%;
              `}
            >
              <p
                css={css`
                  @media (max-width: 640px) {
                    font-size: 14px;
                  }
                  font-family: Avenir;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 18px;
                  line-height: 25px;
                  text-align: center;
                  margin: 0;
                  color: #ffffff;
                `}
              >
                Burnout is a state of emotional, physical, and mental exhaustion
                caused by excessive and prolonged stress. What is shocking is
                that most of us are burnt out at very moment, but never really
                realize that!
              </p>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 72px;
                flex-flow: column;
                background: #101010;
                width: 70%;
                text-align: center;
                height: 100%;
              `}
            >
              <h2
                css={css`
                  @media (max-width: 640px) {
                    font-size: 20px;
                  }
                  font-family: Avenir;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 24px;
                  line-height: 33px;
                  margin: 0;
                  color: #e25050;
                `}
              >
                Find out if you are burnt out!
              </h2>

              <button
                css={css`
                  @media (max-width: 640px) {
                    font-size: 20px;
                    padding: 12px 24px;
                  }
                  font-family: Avenir;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 18px;
                  line-height: 25px;
                  background-color: #202022;
                  padding: 18px 42px;
                  text-align: center;
                  margin: 32px 0;
                  color: #ffffff;
                  border-radius: 8px;
                  border: 0;
                  &:hover {
                    cursor: pointer;
                  }
                `}
                onClick={() => setStarted(true)}
              >
                Start Assessment
              </button>
            </div>
          </div>
        </>
      ) : (
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
                <AnswerBar
                  updateSelected={updateSelected}
                  selected={selected}
                />
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
                    &:hover {
                      cursor: pointer;
                    }
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
            <>
              <div>
                <div
                  css={css`
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <Image alt="" height={48} width={48} src={result.emoji} />
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <h1
                    css={css`
                      @media (max-width: 540px) {
                        font-size: 24px;
                        line-height: 28px;
                      }
                      font-family: Avenir;
                      font-style: normal;
                      font-weight: 850;
                      font-size: 36px;
                      line-height: 56px;
                      letter-spacing: 0.02em;
                      margin: 0 8px 0 0;
                      color: #ffffff;
                    `}
                  >
                    {`Your Burn Out Score is `}
                  </h1>
                  <h1
                    css={css`
                      @media (max-width: 540px) {
                        font-size: 24px;
                        line-height: 28px;
                      }
                      font-family: Avenir;
                      font-style: normal;
                      font-weight: 850;
                      font-size: 36px;
                      line-height: 56px;
                      letter-spacing: 0.02em;
                      margin: 0;
                      color: ${result.color};
                    `}
                  >
                    {` ${result.value}`}
                  </h1>
                  <h1
                    css={css`
                      @media (max-width: 540px) {
                        font-size: 24px;
                        line-height: 28px;
                      }
                      font-family: Avenir;
                      font-style: normal;
                      font-weight: 850;
                      font-size: 36px;
                      line-height: 56px;
                      letter-spacing: 0.02em;
                      margin: 0 0 0 8px;
                      color: #ffffff;
                    `}
                  >
                    {` out of 5`}
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
                  @media (max-width: 540px) {
                    margin-top: 24px
                    font-size: 20px;
                    line-height: 28px;
                  }
                  font-family: Avenir;
                  font-style: normal;
                  font-weight: 850;
                  font-size: 24px;
                  margin-top: 18px;
                  letter-spacing: 0.02em;
                  color: rgba(255, 255, 255, 0.6);
                  text-align: center;
                `}
                    >
                      {result.prompt}
                    </h1>
                  </div>
                </div>
              </div>
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-top: 64px;
                `}
              >
                {/* <PopupButton
          id="iHLQJhgO"
          style={{
            fontSize: 20,
            width: "50%",
            backgroundColor: "#202022",
            border: 0,
            borderRadius: 8,
            padding: "8px 16px",
            color: "#ffffff",
            fontFamily: "avenir",
            fontWeight: 850,
            fontSize: 24,
          }}
          className="my-button"
        >
          Subscribe for updates
        </PopupButton> */}
                <Widget
                  id="iHLQJhgO"
                  style={{ width: "100%", height: 500 }}
                  className="my-form"
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default MainSection;
