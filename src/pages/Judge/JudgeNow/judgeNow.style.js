import styled from 'styled-components';

export const JudgeNowContainer = styled.div`
  margin: 0 28px;
`;

export const JudgeNowHeader = styled.div`
  margin: 33px 0 31px 0;
  display: flex;
  align-items: center;
  .listSlideIcon {
    margin-left: 25px;
  }
  .changeBtn {
    margin-left: 26px;
    box-sizing: border-box;
    height: 53px;
    border: 1px solid #dddddd;
    border-radius: 30px;
    font-size: 18px;
    font-family: Pretendard-Medium;
    padding: 17px 24px 0 21px;
    line-height: 21.48px;
    text-align: center;
    color: #525252;
  }
`;

export const JudgeNowListContainer = styled.ul`
  margin: 5px 0 0 0;
  padding: 0;
`;

export const JudgeNowListLi = styled.li`
  height: 94px;
  margin-bottom: 9px;
  display: flex;
  .restImage {
    height: 94px;
    width: 94px;
    border-radius: 3px;
  }
  .info {
    margin-left: 20px;
    margin-right: auto;
    .title {
      margin: 1px 0 0 0;
      font-size: 18px;
    }
    .content {
      margin-left: 1px;
      font-size: 13px;
      color: #636363;
      .up {
        margin-top: 4px;
      }
      .down {
        margin-top: 2px;
      }
    }
    .credit {
      margin-top: 17px;
      margin-left: 1px;
      font-size: 12px;
      color: #929292;
    }
  }
  .recommend {
    display: flex;
    align-items: center;
    .imageOuter {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #7a7171;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 26px;
        height: 27px;
      }
    }
    .recomNum {
      margin-left: 6px;
      padding-top: 3px;
      box-sizing: border-box;
      width: 28px;
      height: 20px;
      font-size: 13px;
      background-color: #7a7171;
      color: white;
      border-radius: 10px;
      text-align: center;
    }
  }
`;

export const JudgeNowSlideContainer = styled.div``;
