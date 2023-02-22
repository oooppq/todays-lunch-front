import styled from 'styled-components';
import { commonPageContainerStyle } from '../common.style';

export const JudgeContainer = styled.div`
  margin: ${commonPageContainerStyle};
`;

export const JudgeNav = styled.div``;

export const JudgeNavContainer = styled.div`
  height: 30px;
`;

export const SearchBox = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 30px;
  width: 100%;
  border: 1px solid #b8b8b8;
  border-radius: 20px;
  input {
    height: 100%;
    flex-grow: 1;
    box-sizing: border-box;
    border: none;
    margin-left: 10px;
    border-radius: 20px;
  }
  input:focus {
    outline: none;
  }
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0;
    margin: auto 5px;
    height: 23px;
    img {
      height: 100%;
    }
  }
`;

export const RestaurantNavUp = styled.div`
  display: flex;
  height: 30px;
`;

export const RestaurantNavDown = styled.div`
  display: flex;
  height: 20px;
  padding-left: 40px;
  margin-top: 5px;
`;
