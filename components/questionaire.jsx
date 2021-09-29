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
                font-family: Avenir;
                font-style: normal;
                font-weight: 850;
                font-size: 48px;
                line-height: 75px;
                margin: 0;
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
