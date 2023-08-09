/* eslint-disable react/prop-types */
import React from 'react';
import { JudgeSearchResultContainer } from './judgeNew.style';
import defaultIcon from '../../../assets/img/default-icon.svg';
import { pushRecentSearch } from '../../../libs/utils';
import { useInfiniteScroll } from '../../../libs/common.helpers';
import JudgeSearchResultElem from './JudgeSearchResultElem';

const JudgeSearchResult = ({ data, pagination, setMode, setSelected }) => {
  const { observerRef } = useInfiniteScroll(data.length, () => {
    if (pagination) pagination.nextPage();
  });

  return (
    <JudgeSearchResultContainer>
      {data.length && pagination ? (
        <>
          {data.map((restaurant) => (
            <JudgeSearchResultElem
              key={`${restaurant.id}-${restaurant.place_name}`}
              restaurant={restaurant}
              setMode={setMode}
              pushRecentSearch={pushRecentSearch}
              setSelected={setSelected}
            />
          ))}
          <div ref={observerRef} className="observer" />
        </>
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
