import styled from 'styled-components';
import { commonPageContainerStyle, mainColor } from '../common.stye';

export const HomePageContainer = styled.div`
  margin: ${commonPageContainerStyle};
`;

// styles for recommendation
export const RecommendationContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e7eb;
`;

export const RecommendationTitle = styled.h3``;

export const RecommendationMain = styled.div`
  width: 100%;
`;

export const RecommendationImage = styled.img`
  height: 150px;
  width: 100%;
`;

export const RecommendationInfo = styled.div`
  margin-top: 10px;
  display: flex;
  .riL {
    width: 75%;
    .rating {
      color: ${mainColor};
    }
    div {
      color: grey;
      margin-top: 3px;
      font-size: 14px;
    }
  }
  .riR {
    width: 25%;
    div {
      text-align: center;
      border: 1px solid lightgrey;
      border-radius: 10px;
      font-size: 12px;
      padding: 2px;
      margin-bottom: 2px;
      color: #666;
    }
  }
`;

// styles for sale
export const SaleContainer = styled.div``;

export const SaleTitle = styled.h3``;

export const SaleUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const SaleLi = styled.li`
  // display: flex;
  box-sizing: border-box;
  width: 50%;
  padding: 5px;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
  .info {
    margin-left: 10px;
    .store-name {
      color: #666;
    }
    .original-price {
      text-decoration: line-through;
    }
    .sale-price {
      color: #ae0000;
    }
  }
`;
