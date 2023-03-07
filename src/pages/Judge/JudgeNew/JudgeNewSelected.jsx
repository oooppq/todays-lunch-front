/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  SelectedResultContainer,
  SearchDoneBtn,
  SelectedResult,
} from '../judge.style';
import {
  setLatitude,
  setRestaurantName,
  setLongitude,
  setAddress,
} from '../../../redux/judgeNew';

const JudgeNewSelected = ({ setIsSearch, selected }) => {
  const dispatch = useDispatch();

  return (
    <SelectedResultContainer>
      <SelectedResult>
        <div className="placeName">{selected.place_name}</div>
        <div className="address">{selected.address_name}</div>
        <button
          type="button"
          className="detail"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <a href={selected.place_url} target="_blank" rel="noreferrer">
            상세 정보 보기
          </a>
        </button>
      </SelectedResult>
      <SearchDoneBtn
        onClick={() => {
          dispatch(setRestaurantName(selected.place_name));
          dispatch(setAddress(selected.address_name));
          dispatch(setLongitude(selected.x));
          dispatch(setLatitude(selected.y));
          setIsSearch(false);
        }}
      >
        맛집 선택 완료
      </SearchDoneBtn>
    </SelectedResultContainer>
  );
};

export default JudgeNewSelected;
