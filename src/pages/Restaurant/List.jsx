/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  ListElem,
  ListUl,
  ListElemImg,
  ListElemInfo,
} from './restaurant.style';
import defaultImage from '../../assets/img/default-image.png';
import { gotoDetailOnClick } from '../../libs/utils';
import {
  setIsMap,
  setMapCenter,
  setSelectedMarker,
} from '../../redux/restaurant';

const List = ({ restaurants }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <ListUl>
      {restaurants.map((e) => (
        <ListElem key={e.id} onClick={() => gotoDetailOnClick(e.id, navigate)}>
          <ListElemImg src={defaultImage} />
          <ListElemInfo>
            <div className="title">
              <span>{e.restaurant_name}</span>
            </div>
            <div className="etc">
              <div>
                <span>{e.food_category}</span>
                {' | '}
                <span>{e.location_category.map((locCa) => locCa)}</span>
                {' | '}
                <span>{e.location_tag.map((locTag) => locTag)}</span>
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

                <button
                  type="button"
                  onClick={(event) => {
                    dispatch(setSelectedMarker(e.id));
                    dispatch(setIsMap());
                    dispatch(
                      setMapCenter({ lat: e.latitude, lng: e.longitude })
                    );
                    event.stopPropagation();
                  }}
                >
                  지도에서 위치보기
                </button>
              </div>
            </div>
          </ListElemInfo>
        </ListElem>
      ))}
    </ListUl>
  );
};

export default List;
