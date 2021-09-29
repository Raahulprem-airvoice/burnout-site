// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

const AnswerBar = (props) => {
  return (
    <div
      css={css`
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
      {/* <div
            css={css`
            position: absolute;
            width: 80%;
            background-color: #333333;
            height: 4px;
            border-radius: 8px;
            `}
        /> */}
      <div
        css={css`
          display: flex;
          margin-top: 48px;
          width: 100%;
          flex-flow: column;
          align-items: center;
          justify-content: center;
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
          <div css={css``}>
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
              onClick={() => props.updateSelected(1)}
            />
          </div>
          <div css={css``}>
            <button
              css={css`
                background-color: ${props.selected === 2
                  ? "#23AB5C"
                  : "#383838"};
                height: 16px;
                width: 16px;
                border-radius: 20px;
                border: 0;
              `}
              onClick={() => props.updateSelected(2)}
            />
          </div>
          <div css={css``}>
            <button
              css={css`
                background-color: ${props.selected === 3
                  ? "#23AB5C"
                  : "#383838"};
                height: 16px;
                width: 16px;
                border-radius: 20px;
                border: 0;
              `}
              onClick={() => props.updateSelected(3)}
            />
          </div>
          <div css={css``}>
            <button
              css={css`
                background-color: ${props.selected === 4
                  ? "#23AB5C"
                  : "#383838"};
                height: 16px;
                width: 16px;
                border-radius: 20px;
                border: 0;
              `}
              onClick={() => props.updateSelected(4)}
            />
          </div>
          <div css={css``}>
            <button
              css={css`
                background-color: ${props.selected === 5
                  ? "#23AB5C"
                  : "#383838"};
                height: 16px;
                width: 16px;
                border-radius: 20px;
                border: 0;
              `}
              onClick={() => props.updateSelected(5)}
            />
          </div>
          <div css={css``}>
            <button
              css={css`
                background-color: ${props.selected === 6
                  ? "#23AB5C"
                  : "#383838"};
                height: 16px;
                width: 16px;
                border-radius: 20px;
                border: 0;
              `}
              onClick={() => props.updateSelected(6)}
            />
          </div>
          <div css={css``}>
            <button
              css={css`
                background-color: ${props.selected === 7
                  ? "#23AB5C"
                  : "#383838"};
                height: 16px;
                width: 16px;
                border-radius: 20px;
                border: 0;
              `}
              onClick={() => props.updateSelected(7)}
            />
          </div>
        </div>
        <div
          css={css`
            width: 100%;
            margin-top: 12px;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
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
            Never
          </div>
          <div
            css={css`
              font-family: Avenir;
              display: flex;
              flex-flow: row wrap;
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
            Once in a While
          </div>
          <div
            css={css`
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
            Rarely
          </div>
          <div
            css={css`
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
            Sometimes
          </div>
          <div
            css={css`
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
            Often
          </div>
          <div
            css={css`
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
            Usually
          </div>
          <div
            css={css`
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
            Always
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerBar;
