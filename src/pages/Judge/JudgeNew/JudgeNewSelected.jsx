/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SelectedResultContainer,
  SearchDoneBtn,
  SelectedResult,
} from './judgeNew.style';
import {
  setLatitude,
  setRestaurantName,
  setLongitude,
  setAddress,
} from '../../../redux/judgeNew';

const JudgeNewSelected = ({ setIsSearch, selected }) => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const [isWarning, setIsWarning] = useState(false);

  return (
    <SelectedResultContainer>
      <SelectedResult isWarning={isWarning}>
        {selected.place_name ? (
          <div className="placeName">{selected.place_name}</div>
        ) : (
          <div className="inputOuter">
            <input
              ref={nameRef}
              type="text"
              className="placeNameInput"
              placeholder="맛집 이름을 입력해주세요."
              maxLength={16}
              onChange={() => {
                setIsWarning(false);
              }}
            />
          </div>
        )}

        <div className="address">{selected.address_name}</div>
        {selected.place_url && (
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
        )}
      </SelectedResult>
      <SearchDoneBtn
        onClick={() => {
          if (nameRef.current) {
            if (nameRef.current.value.length > 0)
              dispatch(setRestaurantName(nameRef.current.value));
            else {
              setIsWarning(true);
              return;
            }
          } else {
            dispatch(setRestaurantName(selected.place_name));
          }

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
