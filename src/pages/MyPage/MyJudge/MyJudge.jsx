/* eslint-disable react/prop-types */
import React from 'react';
import { MyJudgeContainer, MyJudgeHeader } from './myJudge.style';
import JudgeNowList from '../../Judge/JudgeNow/JudgeNowList';
import { useJudgeNow } from '../../Judge/JudgeNow/judgeNow.helpers';
import smileIcon from '../../../assets/img/smile-icon.svg';
import UserPageHeader from '../../../components/UserPageHeader';

const MyJudge = () => {
  const { restaurants, restaurantsIsLoading, restaurantsIsError } =
    useJudgeNow();

  if (restaurantsIsLoading || restaurantsIsError) return null;

  return (
    <MyJudgeContainer>
      <UserPageHeader>
        <div className="pageTitle">심사중인 맛집</div>
      </UserPageHeader>
      <MyJudgeHeader>
        <div className="explanation">
          <img src={smileIcon} alt="" className="smileIcon" />
          <div className="explanationText">
            추천을 <span className="bold">5개 이상</span> 받을 경우 맛집으로
            자동 등록 됩니다.
          </div>
        </div>
        <div className="title">
          📌 <span className="bold">알바트로스님</span>의 심사중인 맛집 리스트
        </div>
      </MyJudgeHeader>
      <JudgeNowList restaurants={restaurants.data} />
    </MyJudgeContainer>
  );
};

export default MyJudge;
