import React from 'react';
// import { useParams } from 'react-router-dom';
import { DetailContainer } from './detail.style';
import DetailInfo from './DetailInfo';
import DetailMap from './DetailMap';
import DetailTop from './DetailTop';
import DetailContributor from './DetailContributor';

const Detail = () => {
  // const { id } = useParams();
  return (
    <DetailContainer>
      <DetailTop />
      <DetailInfo />
      <DetailMap />
      <DetailContributor />
    </DetailContainer>
  );
};

export default Detail;
