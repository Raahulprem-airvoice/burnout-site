// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

const Questionaire = (props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: column;
      `}
    >
      {/**Question Section Start */}
      <div>
        <div
          css={css`
            @media (max-width: 1024px) {
              width: 80%;
            }
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <div
            css={css`
              @media (max-width: 1024px) {
                width: 80%;
              }
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-start;
            `}
          >
            <h1
              css={css`
                @media (max-width: 540px) {
                  font-size: 24px;
                  line-height: 28px;
                  margin: 16px 0 16px 0;
                }
                font-family: Avenir;
                font-style: normal;
                font-weight: 850;
                font-size: 24px;
                line-height: 56px;
                letter-spacing: 0.02em;
                margin: 0;
                color: #ffffff;
                text-align: left;
                opacity: 0.9;
              `}
            >
              {props.index + 1}
            </h1>
            <h1
              css={css`
                @media (max-width: 540px) {
                  font-size: 24px;
                  line-height: 28px;
                  margin: 16px 0 16px 0;
                }
                font-family: Avenir;
                font-style: normal;
                font-weight: 850;
                font-size: 36px;
                line-height: 56px;
                letter-spacing: 0.02em;
                margin: 0;
                color: #ffffff;
                text-align: left;
                opacity: 0.9;
              `}
            >
              /
            </h1>
            <h1
              css={css`
                @media (max-width: 540px) {
                  font-size: 24px;
                  line-height: 28px;
                  margin: 16px 0 16px 0;
                }
                font-family: Avenir;
                font-style: normal;
                font-weight: 850;
                font-size: 24px;
                line-height: 56px;
                letter-spacing: 0.02em;
                margin: 0;
                color: #ffffff;
                text-align: left;
                opacity: 0.9;
              `}
            >
              21.
            </h1>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <h1
            css={css`
              @media (max-width: 540px) {
                font-size: 20px;
                line-height: 28px;
              }
              font-family: Avenir;
              font-style: normal;
              font-weight: 850;
              font-size: 36px;
              line-height: 56px;
              letter-spacing: 0.02em;
              margin: 0;
              color: #ffffff;
              text-align: center;
            `}
          >
            How often do you have any of the following experiences?
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
                  font-size: 24px;
                  line-height: 28px;
                  margin: 16px 0 0 0;
                }
                font-family: Avenir;
                font-style: normal;
                font-weight: 850;
                font-size: 48px;
                line-height: 75px;
                margin: 0;
                text-align: center;
                letter-spacing: 0.02em;
                color: rgba(255, 255, 255, 0.6);
              `}
            >
              {props.questions[props.index]}
            </h1>
          </div>
        </div>
      </div>
      {/**Question Section End */}

      <div></div>
    </div>
  );
};

export default Questionaire;
