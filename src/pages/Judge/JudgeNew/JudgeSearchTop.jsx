/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { JudgeSearchHeader, JudgeSearchBox } from '../judge.style';
import xIcon from '../../../assets/img/x-icon.svg';
import searchIcon from '../../../assets/img/search-icon.svg';

const JudgeSearchTop = ({
  setIsSearch,
  setResult,
  setPagination,
  setSelected,
  setMode,
  mode,
}) => {
  const [keyBuffer, setKeyBuffer] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setResult([]); // 새로운 키워드 입력됐을 때, data 초기화
    if (keyword.length) {
      const placeSearch = new window.kakao.maps.services.Places();
      placeSearch.keywordSearch(keyword, (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setResult((state) => [...state, ...data]); // 페이지 넘어가도 기존 data 이어지도록..
          setPagination(_pagination);
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          setResult([]);
        }
      });
    }
  }, [keyword, setPagination, setResult]);

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
          type="text"
          placeholder="가게 이름을 검색해보세요."
          onFocus={() => {
            setMode('recent');
          }}
          onChange={(e) => {
            setKeyBuffer(e.target.value);
          }}
          onKeyDown={(e) => {
            const key = e.code;
            switch (key) {
              case 'Enter':
                setKeyword(keyBuffer);
                setMode('result');
                setSelected(null);
                break;
              default:
            }
          }}
        />
        <button
          type="button"
          onClick={() => {
            setKeyword(keyBuffer);
            setMode('result');
            setSelected(null);
          }}
        >
          <img src={searchIcon} alt="" />
        </button>
      </JudgeSearchBox>
    </>
  );
};

export default JudgeSearchTop;
