/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

export const JudgeContainer = styled.div`
  margin: 29px;
`;

export const JudgeHeader = styled.div`
  height: 65px;
  display: flex;
  img {
    margin-right: 8.5px;
  }
  .announce {
    padding: 14px 20px;
    background-color: #f4f4f4;
    font-size: 14px;
    border-radius: 10px;
    line-height: 20px;
    color: #383838;
  }
`;
export const JudgeBody = styled.div`
  margin-top: 60px;
`;
export const JudgeBtn = styled.button`
  height: 112px;
  width: 100%;
  margin-bottom: 39px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  align-items: center;

  .pencil {
    margin: 0 29px 0 23px;
    height: 47px;
    width: 47px;
  }
  .thumb {
    height: 55px;
    width: 55px;
    margin: 0 21px 0 23px;
  }

  .infoTitle {
    font-size: 18px;
    font-family: Pretendard-Medium;
    padding-bottom: 10px;
    color: #525252;
  }
  .infoComment {
    font-size: 15px;
    color: #383838;
  }
`;
