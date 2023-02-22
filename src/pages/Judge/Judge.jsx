import React, { useEffect, useRef, useState } from 'react';
import { JudgeContainer, JudgeNav, SearchBox } from './judge.style';
import searchIcon from '../../assets/img/search-icon.png';
import leftArrowIcon from '../../assets/img/left-arrow-icon.png';
import SearchResult from './SearchResult';
import JudgeOnGoing from './JudgeOnGoing';

const Judge = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState(null);
  const testRef = useRef();
  useEffect(() => {
    if (keyword.length > 0) {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setResult(data);

          if (_pagination.hasNextPage) {
            testRef.current.addEventListener('click', () => {
              _pagination.nextPage();
            });
          }
        }

        if (status === 'ZERO_RESULT') setResult(null);
      });

      setIsSearch(true);
    }
  }, [keyword]);
  const inputRef = useRef();

  return (
    <JudgeContainer>
      <JudgeNav>
        <SearchBox>
          {isSearch ? (
            <button
              type="button"
              onClick={() => {
                setIsSearch(!isSearch);
                setKeyword('');
                inputRef.current.value = '';
              }}
            >
              <img src={leftArrowIcon} alt="" />
            </button>
          ) : null}

          <input
            ref={inputRef}
            type="text"
            placeholder="나만의 맛집을 찾아보세요."
            onKeyDown={(e) => {
              const key = e.code;
              switch (key) {
                case 'Enter':
                  setKeyword(inputRef.current.value);
                  break;
                default:
              }
            }}
          />

          <button
            type="button"
            onClick={() => {
              setKeyword(inputRef.current.value);
            }}
          >
            <img src={searchIcon} alt="" />
          </button>
        </SearchBox>
      </JudgeNav>
      {isSearch ? <SearchResult data={result} /> : <JudgeOnGoing />}
      <button
        ref={testRef}
        type="button"
        onClick={() => {
          setKeyword(inputRef.current.value);
        }}
      >
        <img src={searchIcon} alt="" width="30px" />
      </button>
    </JudgeContainer>
  );
};

export default Judge;
