/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListElem,
  ListUl,
  ListElemImg,
  ListElemInfo,
  ListContainer,
  PaginationContainer,
} from './restaurant.style';
import defaultImage from '../../assets/img/default-image.png';
import leftArrowIcon from '../../assets/img/left-arrow-icon.svg';
import leftEndIcon from '../../assets/img/left-end-icon.svg';
import rightArrowIcon from '../../assets/img/right-arrow-icon.svg';
import rightEndIcon from '../../assets/img/right-end-icon.svg';

import { gotoDetailOnClick } from '../../libs/utils';
import {
  setIsMap,
  setMapCenter,
  setMapLevel,
  setPageNum,
  setSelectedMarker,
} from '../../redux/restaurant';

const List = ({ restaurants, totalPageNum }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pageNum = useSelector((state) => state.restaurant.pageNum);
  return (
    <ListContainer>
      <ListUl>
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
                  #<span>{e.food_category}</span> #
                  <span>{e.location_category}</span>
                  {e.location_category !== e.logcation_tag ? (
                    <span> #{e.location_tag}</span>
                  ) : null}
                </div>
                <div className="reviewRate">
                  <span>리뷰 {e.review_number}개</span>
                  {' | '}
                  <span>평점 {e.rate}</span>
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
                    지도 위치 보기
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
                      길찾기
                    </a>
                  </button>
                </div>
              </div>
            </ListElemInfo>
          </ListElem>
        ))}
      </ListUl>
      <PaginationContainer>
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
      </PaginationContainer>
    </ListContainer>
  );
};

export default List;
