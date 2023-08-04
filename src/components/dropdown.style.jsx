/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const DropdownContainer = styled.div`
  ${({ styleInfo }) => styleInfo}
  .selectedLabel {
    box-sizing: border-box;
    position: relative;
    text-align: left;
    display: flex;
    align-items: center;
    // justify-content: center;
    .label {
      display: inline-block;
      box-sizing: content-box;
      white-space: nowrap;
      overflow: hidden;
    }
    .triangle {
      position: absolute;
    }
  }

  .optionContainer {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    font-size: 13px;
    z-index: 99;
    .optionUl {
      background-color: white;
      box-sizing: border-box;
      max-width: 390px;
      width: 100%;
      height: 364px;
      list-style: none;
      margin: 0;
      padding: 32px 0 0 0;
      border-top-left-radius: 18px;
      border-top-right-radius: 18px;
      overflow: auto;
      .optionLi {
        font-family: Pretendard-Medium;
        font-size: 19px;
        margin: 0 34px;
        padding: 20px 12px;
        border-bottom: 1px solid #eaeaea;
      }
    }
  }
`;
