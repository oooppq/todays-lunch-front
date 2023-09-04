import React from 'react';
import { JudgeNowContainer, JudgeNowHeader } from './judgeNow.style';
import swipeIcon from '../../../assets/img/swipe-icon.svg';
import listIcon from '../../../assets/img/clipboard-icon.svg';
import JudgeNowList from './JudgeNowList';
import JudgeNowSlide from './JudgeNowSlide';
import { useJudgeNow } from './judgeNow.helpers';

const JudgeNow = () => {
  const {
    isList,
    setIsList,
    restaurants,
    // restaurantsIsLoading,
    // restaurantsIsError,
    restaurantStatus,
  } = useJudgeNow();

  if (restaurantStatus !== 'success') return null;

  return (
    <JudgeNowContainer>
      <JudgeNowHeader>
        <img
          className="listSlideIcon"
          src={isList ? swipeIcon : listIcon}
          alt=""
        />
        <div
          className="changeBtn"
          aria-hidden="true"
          onClick={() => {
            setIsList(!isList);
          }}
        >
          {isList ? '슬라이드 형식으로 보기' : '리스트 형식으로 보기'}
        </div>
      </JudgeNowHeader>
      {isList ? (
        <JudgeNowList restaurants={restaurants.data} />
      ) : (
        <JudgeNowSlide restaurants={restaurants.data} />
      )}
    </JudgeNowContainer>
  );
};

export default JudgeNow;
