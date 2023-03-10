import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { JudgeNowContainer, JudgeNowHeader } from './judgeNow.style';
import swipeIcon from '../../../assets/img/swipe-icon.svg';
import listIcon from '../../../assets/img/clipboard-icon.svg';
import JudgeNowList from './JudgeNowList';
import JudgeNowSlide from './JudgeNowSlide';

const JudgeNow = () => {
  const [isList, setIsList] = useState(true);
  const {
    data: restaurantData,
    isLoading: restaurantIsLoading,
    error: restaurantError,
  } = useQuery(['restaurants'], () =>
    // axios.get('/api/restaurants?judgement=true').then((res) => res.data)
    axios.get('/api/judges').then((res) => res.data)
  );

  if (restaurantIsLoading) return null;

  if (restaurantError) return 'error!';

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
        <JudgeNowList restaurantData={restaurantData} />
      ) : (
        <JudgeNowSlide restaurantData={restaurantData} />
      )}
    </JudgeNowContainer>
  );
};

export default JudgeNow;
