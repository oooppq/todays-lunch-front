/* eslint-disable react/prop-types */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ListUl, ListContainer } from './restaurant.style';

import ListElem from './ListElem';

const List = ({ restaurants, handlePageNum }) => {
  if (!restaurants) return null;

  return (
    <ListContainer>
      <ListUl id="listContainer">
        <InfiniteScroll
          dataLength={restaurants.length}
          next={handlePageNum}
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
