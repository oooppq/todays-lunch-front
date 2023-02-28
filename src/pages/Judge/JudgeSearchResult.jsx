/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { JudgeSearchResultContainer } from './judge.style';
import defaultIcon from '../../assets/img/default-icon.svg';

const JudgeSearchResult = ({ data, pagination, setIsResult, setSelected }) => {
  const resultRef = useRef();
  const handleScroll = () => {
    // console.log('now');
    // console.log(resultRef.current.scrollWidth);
    // console.log(resultRef.current.scrollTop);
    // console.log(resultRef.current.clientHeight);
    // const { scrollHeight } = document.documentElement;
    // const { scrollTop } = document.documentElement.scrollTop;
    // const { clientHeight } = document.documentElement.clientHeight;
    if (resultRef.current.scrollTop === 945 && pagination.hasNextPage) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      pagination.nextPage();
    }
  };

  useEffect(() => {
    // console.log(resultRef.current.scrollWidth);
    // console.log(resultRef.current.scrollTop);
    // console.log(resultRef.current.clientHeight);
    // scroll event listener 등록
    resultRef.current.addEventListener('scroll', handleScroll);
    // return () => {
    //   // scroll event listener 해제
    //   resultRef.current.removeEventListener('scroll', handleScroll);
    // };
  });

  return (
    <JudgeSearchResultContainer ref={resultRef}>
      {data ? (
        data.map((d) => (
          <li
            type="button"
            key={d.id}
            onClick={() => {
              setIsResult(false);
              setSelected(d);
            }}
            aria-hidden="true" // eslint rule
          >
            <div className="placeName">{d.place_name}</div>
            <div className="address">{d.address_name}</div>
            <a
              className="detail"
              href={d.place_url}
              target="_blank"
              rel="noreferrer"
            >
              상세 정보 보기
            </a>
          </li>
        ))
      ) : (
        <div className="noResult">
          <img src={defaultIcon} alt="" />
          <div className="comment">
            존재하지 않는 맛집입니다!
            <br />
            다시 한 번 더 확인해 주세요.
          </div>
        </div>
      )}
    </JudgeSearchResultContainer>
  );
};

export default JudgeSearchResult;
