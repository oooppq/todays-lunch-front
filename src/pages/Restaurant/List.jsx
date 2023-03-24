/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  ListElemContainer,
  ListUl,
  ListElemImg,
  ListElemInfo,
  WishAndRoulette,
  ListContainer,
} from './restaurant.style';
import defaultImage from '../../assets/img/default-image.png';
import heartIcon from '../../assets/img/heart-icon.svg';
import rouletteIcon from '../../assets/img/roulette-icon.svg';

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
            <ListElemContainer
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
              <WishAndRoulette>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  <img src={heartIcon} alt="" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  <img src={rouletteIcon} alt="" />
                </button>
              </WishAndRoulette>
            </ListElemContainer>
          ))}
        </InfiniteScroll>
      </ListUl>
    </ListContainer>
  );
};

export default List;
