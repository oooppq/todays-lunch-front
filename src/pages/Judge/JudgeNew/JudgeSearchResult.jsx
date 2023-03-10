/* eslint-disable react/prop-types */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { JudgeSearchResultContainer } from './judgeNew.style';
import defaultIcon from '../../../assets/img/default-icon.svg';
import { pushRecentSearch } from '../../../libs/utils';

const JudgeSearchResult = ({ data, pagination, setMode, setSelected }) => {
  return (
    <JudgeSearchResultContainer id="listContainer">
      {data && pagination ? (
        <InfiniteScroll
          dataLength={data.length}
          next={() => {
            pagination.nextPage();
          }}
          scrollableTarget="listContainer"
          hasMore
        >
          {data.length ? (
            data.map((d) => (
              <li
                type="button"
                key={`${d.id}-${d.place_name}`}
                onClick={() => {
                  setMode('map');
                  pushRecentSearch('recentSearch/judge', d.place_name, 1, d);
                  setSelected(d);
                }}
                aria-hidden="true" // eslint rule
              >
                <div className="placeName">{d.place_name}</div>
                <div className="address">{d.address_name}</div>
                <button
                  type="button"
                  className="detail"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <a href={d.place_url} target="_blank" rel="noreferrer">
                    상세 정보 보기
                  </a>
                </button>
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
        </InfiniteScroll>
      ) : null}
    </JudgeSearchResultContainer>
  );
};

export default JudgeSearchResult;
