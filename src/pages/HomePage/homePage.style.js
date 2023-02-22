import styled from 'styled-components';
import { commonPageContainerStyle, mainColor } from '../common.style';

export const HomePageContainer = styled.div``;

// styles for recommendation
export const RecommendationContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e7eb;
`;

export const RecommendationTitle = styled.h3`
  margin-left: 20px;
  span {
    color: #9b9b9b;
  }
`;

export const RecommendationElem = styled.div`
  width: 100%;
`;

export const RecommendationInfoUp = styled.div`
  position: relative;
  .restaurantImage {
    height: 160px;
    width: 100%;
  }
  .infoUpInner {
    display: flex;
    position: absolute;
    left: 10px;
    bottom: 20px;
    width: 90%;

    .icon {
      height: 30px;
      width: 30px;
      margin-right: 10px;
      margin-top: 7px;
    }
    div {
      margin-left: auto;
      font-size: 30px;
      color: #ffffff;
    }
  }
`;
export const RecommendationInfoDown = styled.div`
  margin: 10px 20px 0 20px;
  overflow: hidden;
  white-space: nowrap;
  color: #4e4e4e;
  .rating {
    color: ${mainColor};
  }
  div {
    color: grey;
    margin-top: 3px;
    font-size: 14px;
  }
`;

// styles for sale
export const SaleContainer = styled.div`
  margin: ${commonPageContainerStyle};
`;

export const SaleTitle = styled.h3`
  span {
    color: #9b9b9b;
  }
`;

export const SaleUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const SaleLi = styled.li`
  // display: flex;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  width: 50%;
  padding: 5px;
  margin-bottom: 10px;
  img {
    width: 100%;
    border-radius: 3px;
  }
  .info {
    margin-left: 10px;
    .storeName {
      color: #909090;
      font-size: 13px;
    }
    .menuPame {
      color: #4f4f4f;
      font-size: 15px;
    }
    .priceDiv {
      display: flex;
      .salePrice {
        color: #ae0000;
        font-size: 16px;
      }
      .originalPrice {
        text-decoration: line-through;
        margin-left: auto;
        color: #909090;
        font-size: 13px;
        vertical-align: bottom;
      }
    }
  }
`;
