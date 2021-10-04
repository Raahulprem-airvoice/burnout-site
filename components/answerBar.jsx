// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

const AnswerBar = (props) => {
  const answers = [
    "Never",
    "Once in a While",
    "Rarely",
    "Sometimes",
    "Often",
    "Usually",
    "Always",
  ];
  return (
    <div
      css={css`
        width: 100%;
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          @media (max-width: 940px) {
            width: 80%;
          }
          @media (max-width: 580px) {
            width: 100%;
          }
          width: 100%;
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #333333;
          height: 4px;
          border-radius: 8px;
        `}
      >
        <div
          css={css`
            display: flex;
            width: 100%;
            flex-flow: column;
            align-items: flex-end;
            justify-content: center;
            margin-top: 40px;
          `}
        >
          <div
            css={css`
              width: 100%;
              display: flex;
              flex-flow: row wrap;
              align-items: center;
              justify-content: space-between;
            `}
          >
            {answers.map((answer, index) => (
              <div css={css``} key={index}>
                <button
                  css={css`
                    background-color: ${props.selected === 1
                      ? "#23AB5C"
                      : "#383838"};
                    height: 16px;
                    width: 16px;
                    border-radius: 20px;
                    border: 0;
                  `}
                  onClick={() => props.updateSelected(index + 1)}
                />
              </div>
            ))}
          </div>
          <div
            css={css`
              width: 100%;
              display: flex;
              flex-flow: row wrap;
              align-items: center;
              justify-content: space-between;
            `}
          >
            {answers.map((answer, index) => (
              <div
                key={index}
                css={css`
                  @media (max-width: 900px) {
                    font-size: 16px;
                  }
                  @media (max-width: 580px) {
                    font-size: 12px;
                  }
                  @media (max-width: 390px) {
                    font-size: 10px;
                  }
                  font-family: Avenir;
                  font-style: normal;
                  font-weight: 850;
                  font-size: 22px;
                  line-height: 37px;
                  display: flex;
                  align-items: center;
                  text-align: center;

                  color: #ffffff;
                `}
              >
                {answer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerBar;
