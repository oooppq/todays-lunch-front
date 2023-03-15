import React from 'react';
// import { useParams } from 'react-router-dom';
import { DetailContainer, DetailContributor } from './detail.style';
import DetailInfo from './DetailInfo';
import DetailMap from './DetailMap';
import DetailTop from './DetailTop';

const Detail = () => {
  // const { id } = useParams();
  return (
    <DetailContainer>
      <DetailTop />
      <DetailInfo />
      <DetailMap />
      <DetailContributor>치킨</DetailContributor>
    </DetailContainer>
  );
};

export default Detail;
