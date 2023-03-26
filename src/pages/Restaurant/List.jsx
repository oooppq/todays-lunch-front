/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ListUl, ListContainer } from './restaurant.style';

import { setPageNum } from '../../redux/restaurant';
import ListElem from './ListElem';

const List = ({ restaurants }) => {
  const dispatch = useDispatch();
  const pageNum = useSelector((state) => state.restaurant.pageNum);
  return (
    <ListContainer>
      <ListUl id="listContainer">
        <InfiniteScroll
          dataLength={restaurants.length}
          next={() => {
            dispatch(setPageNum(pageNum + 1));
          }}
          scrollableTarget="listContainer"
          hasMore
        >
          {restaurants.map((restaurant) => (
            <ListElem key={restaurant.id} restaurant={restaurant} />
          ))}
        </InfiniteScroll>
      </ListUl>
    </ListContainer>
  );
};

export default List;
