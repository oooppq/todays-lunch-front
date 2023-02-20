/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ListElem,
  ListUl,
  ListElemImg,
  ListElemInfo,
} from './restaurant.style';
import defaultImage from '../../assets/img/default-image.png';
import { gotoDetailOnClick } from '../../libs/utils';

const List = ({ restaurants }) => {
  const navigate = useNavigate();

  return (
    <ListUl>
      {restaurants.map((e) => (
        <ListElem key={e.id} onClick={() => gotoDetailOnClick(e.id, navigate)}>
          <ListElemInfo>
            <div>
              <span>{e.restaurant_name}</span>
              <span> {e.rate}</span>
              <span>({e.review_number})</span>
            </div>
            <div>
              <span>{e.food_category}</span>
            </div>
            <div>
              <span>
                {e.location_category.map((locCa) => locCa)}|
                {e.location_tag.map((locTag) => locTag)}
              </span>
              <a
                href={`https://map.kakao.com/link/to/${e.restaurant_name},${e.longitude},${e.latitude}`}
                target="_blank"
                rel="noreferrer"
              >
                길찾기
              </a>
            </div>
          </ListElemInfo>
          <ListElemImg src={defaultImage} />
        </ListElem>
      ))}
    </ListUl>
  );
};

export default List;
