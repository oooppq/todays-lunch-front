import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JudgeSearch from './JudgeSearch';
import JudgeNewGetPhoto from './JudgeNewGetPhoto';
import {
  JudgeNewContainer,
  JudgeNewHeader,
  JudgeNewBody,
  DoneBtn,
} from './judgeNew.style';
import xIcon from '../../../assets/img/x-icon.svg';
import markerIcon from '../../../assets/img/marker-icon.svg';
import JudgeNewOutModal from './JudgeNewOutModal';
import JudgeNewDoneModal from './JudgeNewDoneModal';
import JudgeNewDropdown from './JudgeNewDropdown';
import JudgeNewRecommendCategory from './JudgeNewRecommendCategory';
import { setIntroduction } from '../../../redux/judgeNew';
import Warning from '../../../components/Warning';

const JudgeNew = () => {
  const dispatch = useDispatch();
  const judgeNewStates = useSelector((state) => state.judgeNew);
  // const reader = new FileReader();
  // 각종 modal을 위한 state
  const [isOut, setIsOut] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isSomethingEmpty, setIsSomethingEmpty] = useState(false);

  return (
    <JudgeNewContainer>
      <JudgeNewHeader>
        <div className="pageTitle">맛집 등록하기</div>
        <button
          type="button"
          onClick={() => {
            setIsOut(true);
          }}
        >
          <img src={xIcon} alt="" />
        </button>
      </JudgeNewHeader>
      {isOut ? <JudgeNewOutModal setIsOut={setIsOut} /> : null}
      {isSearch ? <JudgeSearch setIsSearch={setIsSearch} /> : null}
      <JudgeNewBody>
        <div className="search">
          <div className="bodyTitle">맛집 찾기</div>
          <button
            type="button"
            className="bodyBtn saerchBtn"
            onClick={() => {
              setIsSearch(true);
            }}
          >
            <img src={markerIcon} alt="" />
            <div>{judgeNewStates.restaurantName || '맛집 설정하기'}</div>
          </button>
          {isSomethingEmpty && !judgeNewStates.restaurantName && (
            <Warning element="맛집을" />
          )}
        </div>
        <div className="category">
          <div className="bodyTitle">카테고리 설정</div>
          <JudgeNewDropdown />
          {isSomethingEmpty && !judgeNewStates.foodCategory && (
            <Warning element="카테고리를" />
          )}
        </div>
        <JudgeNewGetPhoto />
        {isSomethingEmpty && !judgeNewStates.restaurantImage && (
          <Warning element="사진을" />
        )}
        <div className="review">
          <div className="bodyTitle">리뷰</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              dispatch(setIntroduction(e.target.value));
            }}
          />
          {isSomethingEmpty && !judgeNewStates.introduction && (
            <Warning element="리뷰를" />
          )}
        </div>
        <JudgeNewRecommendCategory />
      </JudgeNewBody>
      <DoneBtn
        onClick={() => {
          if (
            judgeNewStates.restaurantName &&
            judgeNewStates.latitude &&
            judgeNewStates.longitude &&
            judgeNewStates.restaurantImage &&
            // judgeNewStates.locationCategory &&
            // judgeNewStates.locationTag &&
            judgeNewStates.foodCategory &&
            judgeNewStates.introduction.length
          ) {
            setIsDone(true);
          } else {
            setIsSomethingEmpty(true);
          }
        }}
      >
        새로운 맛집 등록
      </DoneBtn>
      {isDone ? <JudgeNewDoneModal setIsDone={setIsDone} /> : null}
    </JudgeNewContainer>
  );
};

export default JudgeNew;
