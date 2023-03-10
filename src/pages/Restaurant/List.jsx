/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  ListElem,
  ListUl,
  ListElemImg,
  ListElemInfo,
  WishAndRoulette,
  ListContainer,
  // PaginationContainer,
} from './restaurant.style';
import defaultImage from '../../assets/img/default-image.png';
import heartIcon from '../../assets/img/heart-icon.svg';
import rouletteIcon from '../../assets/img/roulette-icon.svg';
// import leftArrowIcon from '../../assets/img/left-arrow-icon.svg';
// import leftEndIcon from '../../assets/img/left-end-icon.svg';
// import rightArrowIcon from '../../assets/img/right-arrow-icon.svg';
// import rightEndIcon from '../../assets/img/right-end-icon.svg';

import { gotoDetailOnClick } from '../../libs/utils';
import {
  setIsMap,
  setMapCenter,
  setMapLevel,
  setPageNum,
  setSelectedMarker,
} from '../../redux/restaurant';

const List = ({ restaurants }) => {
  const navigate = useNavigate();
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
          {restaurants.map((e) => (
            <ListElem
              key={e.id}
              onClick={() => gotoDetailOnClick(e.id, navigate)}
            >
              <ListElemImg src={defaultImage} />
              <ListElemInfo>
                <div className="title">
                  <span>{e.restaurant_name}</span>
                </div>
                <div className="etc">
                  <div>
                    <span className="categories">#{e.food_category}</span>
                    <span className="categories">#{e.location_category}</span>
                    {e.location_category !== e.logcation_tag ? (
                      <span className="categories">#{e.location_tag}</span>
                    ) : null}
                  </div>
                  <div className="reviewRate">
                    <span>?????? {e.review_number}???</span>
                    {' | '}
                    <span>?????? {e.rate}</span>
                  </div>
                  <div className="btnContainer">
                    <button
                      type="button"
                      onClick={(event) => {
                        dispatch(setSelectedMarker(e.id));
                        dispatch(setIsMap());
                        dispatch(
                          setMapCenter({ lat: e.latitude, lng: e.longitude })
                        );
                        dispatch(setMapLevel(4));
                        event.stopPropagation();
                      }}
                    >
                      ?????? ?????? ??????
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <a
                        href={`https://map.kakao.com/link/to/${e.restaurant_name},${e.longitude},${e.latitude}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        ?????????
                      </a>
                    </button>
                  </div>
                </div>
              </ListElemInfo>
              <WishAndRoulette>
                <button type="button">
                  <img src={heartIcon} alt="" />
                </button>
                <button type="button">
                  <img src={rouletteIcon} alt="" />
                </button>
              </WishAndRoulette>
            </ListElem>
          ))}
        </InfiniteScroll>
      </ListUl>
      {/* <PaginationContainer>
        {pageNum > 1 ? (
          <>
            <button
              type="button"
              onClick={() => {
                dispatch(setPageNum(1));
              }}
            >
              <img src={leftEndIcon} alt="" />
            </button>
            <button
              type="button"
              onClick={() => {
                if (pageNum > 0) dispatch(setPageNum(pageNum - 1));
              }}
            >
              <img src={leftArrowIcon} alt="" />
            </button>
          </>
        ) : (
          <div className="emptyDiv" />
        )}

        <div className="pageInfo">
          {pageNum} <span>of {totalPageNum}</span>
        </div>
        {pageNum < totalPageNum ? (
          <>
            <button
              type="button"
              onClick={() => {
                if (pageNum < totalPageNum) dispatch(setPageNum(pageNum + 1));
              }}
            >
              <img src={rightArrowIcon} alt="" />
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(setPageNum(totalPageNum));
              }}
            >
              <img src={rightEndIcon} alt="" />
            </button>
          </>
        ) : (
          <div className="emptyDiv" />
        )}
      </PaginationContainer> */}
    </ListContainer>
  );
};

export default List;
