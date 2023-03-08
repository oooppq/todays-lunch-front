import React, { useState } from 'react';
import { JudgeNowContainer, JudgeNowHeader } from './judgeNow.style';
import swipeIcon from '../../../assets/img/swipe-icon.svg';
import JudgeNowList from './JudgeNowList';
import JudgeNowSlide from './JudgeNowSlide';

const JudgeNow = () => {
  const [isList, setIsList] = useState(false);

  return (
    <JudgeNowContainer>
      <JudgeNowHeader>
        <img className="listSlideIcon" src={swipeIcon} alt="" />
        <div
          className="changeBtn"
          aria-hidden="true"
          onClick={() => {
            setIsList(!isList);
          }}
        >
          슬라이드 형식으로 보기
        </div>
      </JudgeNowHeader>
      {isList ? <JudgeNowList /> : <JudgeNowSlide />}
    </JudgeNowContainer>
  );
};

export default JudgeNow;
