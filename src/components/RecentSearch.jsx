import React from 'react';
import {
  RecentSearchContainer,
  RecentSearchUl,
  RecentSearchLi,
} from './recentSearch.style';
import searchIcon from '../assets/img/grey-search-icon.svg';
import xIcon from '../assets/img/grey-x-icon.svg';

const RecentSearch = () => {
  return (
    <RecentSearchContainer>
      <div className="title">최근 검색</div>
      <RecentSearchUl>
        <RecentSearchLi>
          <img src={searchIcon} alt="" className="searchIcon" />
          <div className="name">치킨</div>
          <div className="date">03.03</div>
          <img src={xIcon} alt="" className="xIcon" />
        </RecentSearchLi>
      </RecentSearchUl>
    </RecentSearchContainer>
  );
};

export default RecentSearch;
