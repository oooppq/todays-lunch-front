/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  JudgeSearchContainer,
  JudgeSearchInner,
  JudgeSearchHeader,
  JudgeSearchBox,
  SelectedResultContainer,
  SearchDoneBtn,
  SelectedResult,
} from './judge.style';
import {
  setLatitude,
  setRestaurantName,
  setLongitude,
  setAddress,
} from '../../redux/judgeNew';
import xIcon from '../../assets/img/x-icon.svg';
import searchIcon from '../../assets/img/search-icon.svg';
import JudgeSearchResult from './JudgeSearchResult';
import JudgeSearchMap from './JudgeSearchMap';

const JudgeSearch = ({ setIsSearch }) => {
  const [keyBuffer, setKeyBuffer] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isResult, setIsResult] = useState(false);
  const [result, setResult] = useState(null);
  const [pagination, setPagination] = useState();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (keyword.length) {
      const placeSearch = new window.kakao.maps.services.Places();
      placeSearch.keywordSearch(keyword, (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          if (!result) setResult(data);
          else setResult([...result].concat(data));
          setPagination(_pagination);
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          setResult(null);
        }
      });
    }
  }, [keyword, result]);

  useEffect(() => {
    if (keyBuffer.length === 0) setIsResult(false);
  }, [keyBuffer]);

  const dispatch = useDispatch();

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
        <JudgeSearchBox style={isResult ? { boxShadow: 'none' } : null}>
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
              setIsResult(true);
              setSelected(null);
            }}
          >
            <img src={searchIcon} alt="" />
          </button>
        </JudgeSearchBox>
        {isResult ? (
          <JudgeSearchResult
            data={result}
            pagination={pagination}
            setIsResult={setIsResult}
            setSelected={setSelected}
          />
        ) : (
          <JudgeSearchMap
            data={result}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        {selected ? (
          <SelectedResultContainer>
            <SelectedResult>
              <div className="placeName">{selected.place_name}</div>
              <div className="address">{selected.address_name}</div>
              <a
                className="detail"
                href={selected.place_url}
                target="_blank"
                rel="noreferrer"
              >
                상세 정보 보기
              </a>
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
        ) : null}
      </JudgeSearchInner>
    </JudgeSearchContainer>
  );
};

export default JudgeSearch;
