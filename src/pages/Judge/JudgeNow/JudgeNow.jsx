import React from 'react';
import { JudgeNowContainer, JudgeNowHeader } from './judgeNow.style';
import swipeIcon from '../../../assets/img/swipe-icon.svg';
import JudgeNowList from './JudgeNowList';

const JudgeNow = () => {
  return (
    <JudgeNowContainer>
      <JudgeNowHeader>
        <img className="listSlideIcon" src={swipeIcon} alt="" />
        <div className="changeBtn">슬라이드 형식으로 보기</div>
      </JudgeNowHeader>
      <JudgeNowList />
    </JudgeNowContainer>
  );
};

export default JudgeNow;
