import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueries } from 'react-query';
import axios from 'axios';
import JudgeSearch from './JudgeSearch';
import JudgeNewGetPhoto from './JudgeNewGetPhoto';
import {
  JudgeNewContainer,
  JudgeNewHeader,
  JudgeNewBody,
  DoneBtn,
} from './judgeNew.style';
import xIcon from '../../../assets/img/x-icon.svg';
import refreshIcon from '../../../assets/img/refresh-icon.png';
import markerIcon from '../../../assets/img/marker-icon.svg';
import JudgeNewOutModal from './JudgeNewOutModal';
import JudgeNewDoneModal from './JudgeNewDoneModal';
import JudgeNewDropdown from './JudgeNewDropdown';
import JudgeNewRecommendCategory from './JudgeNewRecommendCategory';
import {
  setLocationCategory,
  setIntroduction,
  resetRestaurantInfo,
} from '../../../redux/judgeNew';
import Warning from '../../../components/Warning';
import Dropdown from '../../../components/Dropdown';

const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

const dropdownStyle = `
    .selectedLabel {
      background-color: white;
      height: 32px;
      width: 98px;
      font-size: 12px;
      border-radius: 30px;
      border: 1px solid #bdbdbd;
      padding: 0 16px;
      color: #7c7c7c;
      .triangle {
        right: 11px;
        color: #cbcbcb;
      }
    }
  `;

const JudgeNew = () => {
  const dispatch = useDispatch();
  const judgeNewStates = useSelector((state) => state.judgeNew);
  // const reader = new FileReader();
  // 각종 modal을 위한 state
  const [isOut, setIsOut] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isSomethingEmpty, setIsSomethingEmpty] = useState(false);

  const locationCategory = useSelector(
    (state) => state.judgeNew.locationCategory
  );

  const ress = useQueries(
    [
      {
        queryKey: ['location-category'],
        queryFn: () =>
          axios.get(`${SERVER_URL}/location-category`).then((res) => res.data),
      },
      {
        queryKey: ['food-category'],
        queryFn: () =>
          axios.get(`${SERVER_URL}/food-category`).then((res) => res.data),
      },
    ],
    {
      refetchOnWindowFocus: false,
    }
  );

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
          <div className="titleOuter">
            <div className="bodyTitle">맛집 찾기</div>
            <div className="bodySubTitle">
              [설정한 위치 5km 이내의 맛집만 등록할 수 있어요.]
            </div>
          </div>

          <div className="searchBtnOuter">
            {ress[0] && !locationCategory && (
              <Dropdown
                data={ress[0].data}
                selected={locationCategory}
                setSelected={(toSelect) => {
                  dispatch(setLocationCategory(toSelect));
                }}
                defaultValue="위치 설정"
                style={dropdownStyle}
              />
            )}
            {locationCategory && (
              <>
                <button
                  type="button"
                  className="saerchBtn"
                  onClick={() => {
                    setIsSearch(true);
                  }}
                >
                  <img src={markerIcon} alt="" />
                  <div>{judgeNewStates.restaurantName || '맛집 설정하기'}</div>
                </button>
                <div className="selectedLoc">
                  <div className="">위치: {locationCategory.name}</div>
                  <button
                    type="button"
                    className="refreshBtn"
                    onClick={() => {
                      dispatch(resetRestaurantInfo());
                    }}
                  >
                    <img src={refreshIcon} alt="" className="" />
                  </button>
                </div>
              </>
            )}
          </div>
          {isSomethingEmpty && !judgeNewStates.restaurantName && (
            <Warning element="맛집을" />
          )}
        </div>
        <div className="category">
          <div className="bodyTitle">카테고리 설정</div>
          <JudgeNewDropdown foodCategoryRes={ress[1]} />
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
