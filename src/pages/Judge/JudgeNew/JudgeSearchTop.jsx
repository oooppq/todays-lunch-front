/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { JudgeSearchHeader, JudgeSearchBox } from './judgeNew.style';
import xIcon from '../../../assets/img/x-icon.svg';
import searchIcon from '../../../assets/img/search-icon.png';

const JudgeSearchTop = ({
  setIsSearch,
  setResult,
  setPagination,
  setMode,
  mode,
  keyBuffer,
  setKeyBuffer,
  keyword,
  inputRef,
  searchActions,
}) => {
  const locationCategory = useSelector(
    (state) => state.judgeNew.locationCategory
  );

  useEffect(() => {
    if (keyword === 'SKIP_SEARCHING') return;
    setResult([]); // 새로운 키워드 입력됐을 때, data 초기화
    if (keyword.length) {
      const placeSearch = new window.kakao.maps.services.Places();
      placeSearch.keywordSearch(
        keyword,
        (data, status, _pagination) => {
          if (status === window.kakao.maps.services.Status.OK) {
            setResult((state) => [...state, ...data]); // 페이지 넘어가도 기존 data 이어지도록..
            setPagination(_pagination);
          } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
            setResult([]);
          }
        },
        {
          location: new window.kakao.maps.LatLng(
            locationCategory.latitude,
            locationCategory.longitude
          ),
          radius: 5000,
        }
      );
    }
  }, [
    keyword,
    locationCategory.latitude,
    locationCategory.longitude,
    setPagination,
    setResult,
  ]);

  return (
    <>
      <JudgeSearchHeader>
        <div className="searchTitle">맛집 찾기</div>
        <button
          type="button"
          onClick={() => {
            setIsSearch(false);
            setResult([]);
          }}
        >
          <img src={xIcon} alt="" />
        </button>
      </JudgeSearchHeader>
      <JudgeSearchBox style={mode === 'map' ? null : { boxShadow: 'none' }}>
        <input
          value={keyBuffer}
          ref={inputRef}
          type="text"
          placeholder="가게 이름을 검색해보세요."
          onChange={(e) => {
            setKeyBuffer(e.target.value);
            if (e.target.value.length > 0) {
              setMode('recent');
            } else {
              setMode((state) => {
                if (state === 'recent' || state === 'result') {
                  return 'map';
                }
                return state;
              });
            }
          }}
          onKeyDown={(e) => {
            if (e.nativeEvent.isComposing) return;
            const key = e.code;
            switch (key) {
              case 'Enter':
                searchActions(keyBuffer);
                break;
              default:
            }
          }}
        />
        <button
          type="button"
          onClick={() => {
            searchActions(keyBuffer);
          }}
        >
          <img src={searchIcon} alt="" />
        </button>
      </JudgeSearchBox>
    </>
  );
};

export default JudgeSearchTop;
