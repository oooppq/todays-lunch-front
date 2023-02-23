import styled from 'styled-components';

export const HomePageContainer = styled.div``;

// styles for recommendation
export const RecommendationContainer = styled.div`
  margin-top: 24px;
`;

export const RecommendationTitle = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 22px;
  height: 26px;
  margin: 0 20px 20px 20px;
  span {
    color: #9b9b9b;
  }
`;

export const RecommendationElem = styled.div`
  width: 100%;
`;

export const RecommendationInfoUp = styled.div`
  position: relative;
  height: 161px;
  .restaurantImage {
    height: 161px;
    width: 100%;
  }
  .infoUpInner {
    display: flex;
    position: absolute;
    align-items: baseline;
    bottom: 15px;
    width: 100%;
    height: 30px;

    .icon {
      display: table-cell;
      height: 30px;
      width: 30px;
      margin-left: 14px;
    }
    .lowestPrice {
      position: absolute;
      font-family: 'Pretendard-Bold';

      font-size: 24px;
      line-height: 40px;
      color: #ffffff;
      right: 17px;
      bottom: -3px;
    }
  }
`;

export const RecommendationInfoDown = styled.div`
  margin: 19px 22px 0 22px;
  overflow: hidden;
  white-space: nowrap;
  color: #4e4e4e;
  .title {
    font-family: 'Pretendard-SemiBold';
    color: #4e4e4e;
    font-size: 20px;
  }
  .comment {
    color: #4f4f4f;
    font-size: 17px;
    margin-top: 6px;
  }
  .reviewRate {
    margin-top: 9px;
    text-align: right;
    font-size: 12px;
    color: #356461;
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
  margin-top: 42px;
`;

export const SaleTitle = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 22px;
  margin: 0 20px;
  height: 26px;
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
  img {
    // width: 100%;
    width: 166px;
    height: 166px;
    border-radius: 3px;
  }
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
        color: black;
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
