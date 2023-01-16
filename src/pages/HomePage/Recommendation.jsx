/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import {
  RecommendationContainer,
  RecommendationTitle,
  RecommendationMain,
  RecommendationImage,
  RecommendationInfo,
} from './\bhomePage.style';
import defaultImage from '../../assets/img/default-image.png';

const queryClient = new QueryClient();

const SetData = () => {
  const { isLoading, error, data } = useQuery('/api/restaurants', () =>
    fetch('/api/restaurants').then((res) => res.json())
  );
  if (isLoading) return null;
  if (error) return 'error!';
  return (
    <RecommendationContainer>
      <RecommendationTitle className="bold">오늘의 맛집</RecommendationTitle>
      <RecommendationMain>
        <RecommendationImage src={defaultImage} />
        <RecommendationInfo>
          <div className="riL">
            <span>{data[0].rest_name}</span>
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
const Recommendation = () => {
  // const [isLoading, setLoading] = useState(true);
  // const getData = async (url) => {
  //   const res = await axios.get(url);
  //   setLoading(false);
  //   return res.data;
  // };
  // const data = getData('api/restaurants');
  // // console.log(res.data);

  return (
    <QueryClientProvider client={queryClient}>
      <SetData />
    </QueryClientProvider>
  );
};

export default Recommendation;
