import styled from 'styled-components';

export const MyJudgeContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;

  padding: 67px 28px 0 28px;
  max-width: 390px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  .pageTitle {
    display: flex;
    align-items: center;
    font-family: Pretendard-Medium;
    font-size: 20px;
  }
`;

export const MyJudgeHeader = styled.div`
  margin: 22px 0;
  .explanation {
    margin: 0 12px;
    display: flex;
    align-items: center;
    .smileIcon {
      margin-right: 15px;
      width: 36px;
      height: 36px;
    }
    .explanationText {
      width: 259px;
      padding: 11px 19px;
      background-color: #f4f4f4;
      border-radius: 10px;
      line-height: 20px;
      font-size: 14px;
      color: #383838;
    }
  }
  .title {
    margin-top: 25px;
    font-family: Pretendard-SemiBold;
    font-size: 16px;
    color: #9b9b9b;
  }
  .userName {
    color: black;
  }
  .bold {
    font-family: Pretendard-SemiBold;
  }
`;
