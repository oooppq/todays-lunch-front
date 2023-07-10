/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  RecentSearchContainer,
  RecentSearchUl,
  RecentSearchLi,
} from './recentSearch.style';
import searchIcon from '../assets/img/grey-search-icon.svg';
import markerIcon from '../assets/img/grey-marker-icon.svg';
import xIcon from '../assets/img/grey-x-icon.svg';
import { formatDate } from '../libs/utils';

const RecentSearch = ({ data }) => {
  const [dataState, setDataState] = useState(data);

  useEffect(() => {
    const toDelete = [];
    let newData = data.filter((d) => {
      return new Date(new Date() - new Date(d.date)).getDate() - 1 <= 7; // 만료기간 7일
    });
    // 중복 제거
    for (let i = 0; i < newData.length; i += 1) {
      for (let j = i + 1; j < newData.length; j += 1) {
        if (
          newData[i].title === newData[j].title &&
          newData[i].isLocation === newData[j].isLocation
        )
          toDelete.push(j);
      }
    }
    newData = newData.filter((e, index) => !toDelete.includes(index));
    newData = newData.slice(0, 10);
    localStorage.setItem('recentSearch/judge', JSON.stringify(newData));
    setDataState(newData);
  }, [data]);

  return (
    <RecentSearchContainer>
      <div className="title">최근 검색</div>
      <RecentSearchUl>
        {dataState.length
          ? dataState.map((e, index) => (
              <RecentSearchLi
                key={`${e.title}, ${e.date}`}
                onClick={() => {
                  e.onClickHandler();
                }}
              >
                <div className="resultIconOuter">
                  <img
                    src={e.isLocation ? markerIcon : searchIcon}
                    alt=""
                    className="resultIcon"
                  />
                </div>
                <div className="name">{e.title}</div>
                <div className="date">{formatDate(new Date(e.date))}</div>
                <img
                  aria-hidden="true"
                  src={xIcon}
                  alt=""
                  className="xIcon"
                  onClick={(event) => {
                    const tempData = [...dataState];
                    tempData.splice(index, 1);
                    localStorage.setItem(
                      'recentSearch/judge',
                      JSON.stringify(tempData)
                    );
                    setDataState(tempData);
                    event.stopPropagation();
                  }}
                />
              </RecentSearchLi>
            ))
          : null}
      </RecentSearchUl>
    </RecentSearchContainer>
  );
};

export default RecentSearch;
