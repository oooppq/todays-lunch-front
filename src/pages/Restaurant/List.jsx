/* eslint-disable react/prop-types */
import React from 'react';
import { ListUl, ListContainer } from './restaurant.style';

import ListElem from './ListElem';
import { useInfiniteScroll } from '../../libs/common.helpers';

const List = ({ restaurants, handlePageNum, className }) => {
  const { ObserverDiv } = useInfiniteScroll(restaurants, handlePageNum);

  return (
    <ListContainer className={className}>
      <ListUl>
        {restaurants ? (
          <>
            {restaurants.map((restaurant) => (
              <ListElem key={restaurant.id} restaurant={restaurant} />
            ))}
            {ObserverDiv}
          </>
        ) : null}
      </ListUl>
    </ListContainer>
  );
};

export default List;
