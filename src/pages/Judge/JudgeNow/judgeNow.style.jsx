import styled from 'styled-components';

export const JudgeNowContainer = styled.div`
  margin: 0 28px;
`;

export const JudgeNowHeader = styled.div`
  margin: 33px 0 31px 0;
  display: flex;
  height: 53px;
  align-items: center;
  .listSlideIcon {
    margin-left: 25px;
  }
  .changeBtn {
    margin-left: auto;
    margin-right: 25px;
    box-sizing: border-box;
    height: 53px;
    width: 211px;
    border: 1px solid #dddddd;
    border-radius: 30px;
    font-size: 18px;
    font-family: Pretendard-Medium;
    // padding: 17px 24px 0 21px;
    padding-top: 17px;
    text-align: center;
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
  // height: 94px;
  margin-bottom: 9px;
  display: flex;

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
      span {
        font-family: Pretendard-SemiBold;
      }
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

export const JudgeNowDetailModal = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JudgeNowSlideContainer = styled.div`
  position: relative;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  .carousel .control-arrow {
    background-color: black;
    color: black;
  }
  .arrowContainer {
    top: 0;
    width: 46px;
    height: 100%;
    z-index: 999;

    .arrowIcon {
      padding-top: 269px;
    }
  }
  .left {
    left: 0px;
    padding-left: 20px;
  }
  .right {
    right: 0px;
    padding-right: 20px;
  }
`;

export const JudgeNowDetailContainer = styled.div`
  z-index: 100;
  position: relative;
  max-width: 352px;
  width: 100%;
  height: 587px;
  background-color: white;
  border-radius: 10px;
  .restImg {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 247px;
    width: 100%;
    margin-bottom: 13px;
  }
  .xBtn {
    position: absolute;
    height: 23px;
    width: 23px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    top: 10px;
    right: 11px;
    border: 0;
    padding: 0;
    img {
      padding-top: 2.5px;
      width: 13px;
      height: 13px;
    }
  }
`;

export const JudgeNowDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 21px;
  }
  .tags {
    margin-top: 7px;
    display: flex;
    .tag {
      font-size: 14px;
      color: #666666;
      margin-right: 7px;
    }
  }
  .content {
    width: 314px;
    height: 120px;
    margin-top: 11px;
    text-align: left;
    font-size: 14px;
    color: #484848;
    line-height: 20px;
    overflow-y: auto;
  }
  .linkToKakaoMap {
    margin-top: 10px;
    padding-top: 5px;
    width: 89px;
    height: 26px;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #bdbdbd;
    border-radius: 10px;
    color: #5e5e5e;
    font-size: 12px;
    text-decoration: none;
  }
  .credit {
    margin-top: 6px;
    font-size: 13px;
    color: #929292;
  }
  .recommend {
    height: 60px;
    margin-top: 12px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    .imageOuter {
      margin-right: 8px;
      width: 59px;
      height: 59px;
      border-radius: 50%;
      background-color: #7a7171;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 33px;
        width: 33px;
        padding-bottom: 3px;
      }
    }
    .recomNum {
      padding-top: 2px;
      box-sizing: border-box;
      border-radius: 10px;
      text-align: center;
      background-color: #7a7171;
      height: 20px;
      width: 28px;
      color: white;
      font-size: 13px;
    }
  }
`;
