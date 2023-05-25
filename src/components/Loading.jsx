import React from 'react';
import { ClipLoader } from 'react-spinners';
import { LoadingContainer } from './loading.style';

const Loading = () => {
  return (
    <LoadingContainer>
      <ClipLoader color="#6ab2b2" size={70} />
    </LoadingContainer>
  );
};

export default Loading;
