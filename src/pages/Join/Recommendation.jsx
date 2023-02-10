/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  RecommendationContainer,
  RecommendationTitle,
  RecommendationImage,
  RecommendationInfo,
  RecommendationElem,
} from '../HomePage/homePage.style';
import defaultImage from '../../assets/img/default-image.png';
import { gotoDetailOnClick } from '../../libs/utils';

const queryClient = new QueryClient();

const SetData = ({ navigate }) => {
  const { isLoading, error, data } = useQuery(['recommends', 'list'], () =>
    axios.get('/api/recommends').then((res) => res.data)
  );

  if (isLoading) return null;
  if (error) return 'error!';

  return (
    <RecommendationContainer>
      <RecommendationTitle className="bold">오늘의 맛집</RecommendationTitle>

      {data.map((e) => (
        <RecommendationElem
          id={e.id}
          key={e.id}
          onClick={(event) => gotoDetailOnClick(event, navigate)}
        >
          <RecommendationImage src={defaultImage} />
          <RecommendationInfo>
            <div className="riL">
              <span>{e.name}</span>
              <span className="rating"> {e.rating}</span>
              <div>"{e.comment}"</div>
            </div>
            <div className="riR">
              <div className="bold">찜하기</div>
              <div className="bold">룰렛에 추가</div>
            </div>
          </RecommendationInfo>
        </RecommendationElem>
      ))}
    </RecommendationContainer>
  );
};

const Recommendation = () => {
  const navigate = useNavigate();

  return (
    <QueryClientProvider client={queryClient}>
      <SetData navigate={navigate} />
    </QueryClientProvider>
  );
};

export default Recommendation;
