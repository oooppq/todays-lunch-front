/* eslint-disable react/prop-types */
import React from 'react';
import { ListUl, ListContainer } from './restaurant.style';

import ListElem from './ListElem';
import { useInfiniteScroll } from '../../libs/common.helpers';
import { flattenPages } from '../../libs/utils';

const List = ({ restaurants, handlePageNum, className }) => {
  const { observerRef } = useInfiniteScroll(restaurants, handlePageNum);

  return (
    <ListContainer className={className}>
      <ListUl>
        {restaurants ? (
          <>
            {flattenPages(restaurants.pages).map((restaurant) => (
              <ListElem key={restaurant.id} restaurant={restaurant} />
            ))}
            <div ref={observerRef} className="observer" />
          </>
        ) : null}
      </ListUl>
    </ListContainer>
  );
};

export default List;
