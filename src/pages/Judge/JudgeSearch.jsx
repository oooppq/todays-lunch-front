/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  JudgeSearchContainer,
  JudgeSearchInner,
  JudgeSearchHeader,
  JudgeSearchBox,
  SearchDoneBtn,
} from './judge.style';
import xIcon from '../../assets/img/x-icon.svg';
import searchIcon from '../../assets/img/search-icon.svg';
import JudgeSearchMapAndList from './JudgeSearchMap';

const JudgeSearch = ({ setIsSearch, setLocation }) => {
  const [keyBuffer, setKeyBuffer] = useState('');
  const [keyword, setKeyword] = useState('');
  return (
    <JudgeSearchContainer>
      <JudgeSearchInner>
        <JudgeSearchHeader>
          <div className="searchTitle">맛집 위치</div>
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
                  break;
                default:
              }
            }}
          />
          <button
            type="button"
            onClick={() => {
              setKeyword(keyBuffer);
            }}
          >
            <img src={searchIcon} alt="" />
          </button>
        </JudgeSearchBox>
        <JudgeSearchMapAndList keyword={keyword} setLocation={setLocation} />

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
