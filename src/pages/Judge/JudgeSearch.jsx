/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  JudgeSearchContainer,
  JudgeSearchInner,
  JudgeSearchHeader,
  JudgeSearchBox,
  SearchDoneBtn,
} from './judge.style';
import xIcon from '../../assets/img/x-icon.svg';
import searchIcon from '../../assets/img/search-icon.svg';
import JudgeSearchResult from './JudgeSearchResult';
import JudgeSearchMap from './JudgeSearchMap';

const JudgeSearch = ({ setIsSearch }) => {
  const [keyBuffer, setKeyBuffer] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isResult, setIsResult] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (keyword.length === 0) return;
    const placeSearch = new window.kakao.maps.services.Places();
    // placeSearch.keywordSearch(keyword, (data, status, _pagination) => {
    placeSearch.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setResult(data);
      }
    });
  }, [keyword]);
  return (
    <JudgeSearchContainer>
      <JudgeSearchInner>
        <JudgeSearchHeader>
          <div className="searchTitle">맛집 찾기</div>
          <button
            type="button"
            onClick={() => {
              setIsSearch(false);
            }}
          >
            <img src={xIcon} alt="" />
          </button>
        </JudgeSearchHeader>
        <JudgeSearchBox>
          <input
            type="text"
            placeholder="가게 이름을 검색해보세요."
            onChange={(e) => {
              setKeyBuffer(e.target.value);
            }}
            onKeyDown={(e) => {
              const key = e.code;
              switch (key) {
                case 'Enter':
                  setKeyword(keyBuffer);
                  setIsResult(true);
                  break;
                default:
              }
            }}
          />
          <button
            type="button"
            onClick={() => {
              setKeyword(keyBuffer);
              setIsResult(true);
            }}
          >
            <img src={searchIcon} alt="" />
          </button>
        </JudgeSearchBox>
        {isResult ? (
          <JudgeSearchResult data={result} />
        ) : (
          <JudgeSearchMap data={result} />
        )}

        <SearchDoneBtn
          onClick={() => {
            setIsSearch(false);
          }}
        >
          선택 완료
        </SearchDoneBtn>
      </JudgeSearchInner>
    </JudgeSearchContainer>
  );
};

export default JudgeSearch;
