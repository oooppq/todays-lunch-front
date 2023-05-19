import React from 'react';
import preparingIcon from '../assets/img/preparing-icon.png';
import { PreparingContainer } from './preparing.style';

const Preparing = () => {
  return (
    <PreparingContainer>
      <img src={preparingIcon} alt="" className="preparingIcon" />
      <div className="preparingMessage">준비중</div>
    </PreparingContainer>
  );
};

export default Preparing;
