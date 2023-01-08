/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  RecommendationContainer,
  RecommendationTitle,
  RecommendationMain,
  RecommendationImage,
  RecommendationInfo,
} from './\bhomePage.style';
import defaultImage from '../../assets/img/default-image.png';

const Recommendation = () => {
  return (
    <RecommendationContainer>
      <RecommendationTitle className="bold">오늘의 맛집</RecommendationTitle>
      <RecommendationMain>
        <RecommendationImage src={defaultImage} />
        <RecommendationInfo>
          <div className="riL">
            <span>가츠벤또</span>
            <span className="rating"> 5.0</span>
            <div>"모든 서강대생이 인정한 극강의 맛집"</div>
          </div>
          <div className="riR">
            <div className="bold">찜하기</div>
            <div className="bold">룰렛에 추가</div>
          </div>
        </RecommendationInfo>
      </RecommendationMain>
    </RecommendationContainer>
  );
};

export default Recommendation;
