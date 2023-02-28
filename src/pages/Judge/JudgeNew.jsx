import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JudgeSearch from './JudgeSearch';
import JudgeNewGetPhoto from './JudgeNewGetPhoto';
import {
  JudgeNewContainer,
  JudgeNewHeader,
  JudgeNewBody,
  DoneBtn,
} from './judge.style';
import xIcon from '../../assets/img/x-icon.svg';
import markerIcon from '../../assets/img/marker-icon.svg';
import JudgeNewOutModal from './JudgeNewOutModal';
import JudgeSuccess from './JudgeSuccess';
import JudgeNewDropdown from './JudgeNewDropdown';

import { setInstroduction } from '../../redux/judgeNew';

const JudgeNew = () => {
  /* 데이터의 상태를 다루는 state, 이 페이지에서만 필요하고 페이지 이동시에
     state가 유지될 필요가 없기 때문에 local state로 구현 */
  const dispatch = useDispatch();
  const judgeNewStates = useSelector((state) => state.judgeNew);

  // 각종 modal을 위한 state
  const [isOut, setIsOut] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isDone, setIsDone] = useState(false);

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
        </div>
        <div className="category">
          <div className="bodyTitle">카테고리 설정</div>
          <JudgeNewDropdown />
        </div>
        <JudgeNewGetPhoto />

        <div className="review">
          <div className="bodyTitle">리뷰</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              dispatch(setInstroduction(e.target.value));
            }}
          />
        </div>
      </JudgeNewBody>
      <DoneBtn
        onClick={() => {
          if (
            judgeNewStates.restaurantName &&
            judgeNewStates.latitude &&
            judgeNewStates.longitude &&
            judgeNewStates.locationCategory &&
            judgeNewStates.locationTag &&
            judgeNewStates.foodCategory &&
            judgeNewStates.instroduction.length
          ) {
            setIsDone(true);
          }
        }}
      >
        새로운 맛집 등록
      </DoneBtn>
      {isDone ? <JudgeSuccess setIsDone={setIsDone} /> : null}
    </JudgeNewContainer>
  );
};

export default JudgeNew;
