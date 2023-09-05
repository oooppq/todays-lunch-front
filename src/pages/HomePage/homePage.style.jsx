import styled from 'styled-components';

export const HomePageContainer = styled.div``;

// styles for recommendation
export const RecommendationContainer = styled.div`
  margin-top: 24px;
  .carousel-slider {
    height: 280px;
  }
  .carousel .control-dots {
    margin-bottom: 0;
  }
  .carousel .control-dots .dot {
    background-color: #f0eaea;
    box-shadow: none;
    bottom: -100px !important;
    opacity: 1 !important;
    height: 5px;
    width: 5px;
    margin: 0 6px;
  }
  .carousel .control-dots .selected {
    background-color: #454545;
  }
`;

export const RecommendationTitle = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 22px;
  height: 26px;
  margin: 0 20px 20px 20px;
  display: flex;
  align-items: center;
  .riceIcon {
    height: 24px;
    width: 24px;
    margin-right: 7px;
  }
  span {
    color: #9b9b9b;
  }
`;

export const RecommendationElemContainer = styled.div`
  width: 100%;
  text-align: left !important;
  position: relative;
`;

export const RecommendationInfoUp = styled.div`
  position: relative;
  height: 266px;

  .infoUpInner {
    display: flex;
    position: absolute;
    align-items: baseline;
    bottom: 125px;
    width: 100%;
    height: 30px;
    .lowestPrice {
      position: absolute;
      font-family: 'Pretendard-Bold';

      font-size: 24px;
      line-height: 40px;
      color: #ffffff;
      left: 17px;
      bottom: -3px;
    }
  }
`;

export const RecommendationInfoDown = styled.div`
  padding: 19px 20px 10px 22px;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(255, 255, 255, 0.9);
  .left {
    overflow: hidden;
    white-space: nowrap;
    color: #4e4e4e;
    .titleOuter {
      font-size: 20px;
      .title {
        font-family: 'Pretendard-SemiBold';
        color: #4e4e4e;
      }
    }
    .comment {
      color: #4f4f4f;
      font-size: 17px;
      margin-top: 6px;
    }
    .reviewRate {
      margin: 9px 0 0 10px;
      // text-align: right;
      font-size: 12px;
      color: #356461;
    }
  }
  .right {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    .btn {
      width: 37px;
      height: 37px;
      box-sizing: border-box;
      border: 1px solid #bdbdbd;
      border-radius: 50%;
      margin-bottom: 6px;
      img {
        width: 17px;
        height: 17px;
      }
    }
    .colored {
      background-color: #6ab2b2;
      border: none;
    }
  }
`;

export const SliderDotContainer = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
  justify-content: center;
  img {
    width: 5px;
    margin: 0 6px;
  }
`;

// styles for sale
export const SaleContainer = styled.div`
  margin-top: 40px;
`;

export const SaleTitle = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 22px;
  margin: 0 20px;
  height: 26px;
  display: flex;
  align-items: center;
  .saleIcon {
    width: 24px;
    height: 24px;
    margin-right: 7px;
  }
  span {
    color: #9b9b9b;
  }
`;

export const SaleUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 22px 21px 0 21px;
`;

export const SaleLi = styled.li`
  // display: flex;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  // width: 50%;
  // padding: 0 6px;
  margin-bottom: 10px;

  .info {
    margin-left: 9px;
    margin-top: 9px;
    .storeName {
      font-family: 'Pretendard-Regular';
      color: #909090;
      font-size: 13px;
    }
    .menuName {
      margin-top: 3px;
      font-family: 'Pretendard-Medium';
      color: #4f4f4f;
      font-size: 15px;
    }
    .priceDiv {
      display: flex;
      margin-top: 3px;
      .salePrice {
        font-family: 'Pretendard-SemiBold';
        color: #f59e0b;
        font-size: 16px;
      }
      .originalPrice {
        font-family: 'Pretendard-Regular';
        text-decoration: line-through;
        margin-left: auto;
        margin-right: 5px;
        color: #909090;
        font-size: 13px;
        vertical-align: bottom;
      }
    }
  }
`;
