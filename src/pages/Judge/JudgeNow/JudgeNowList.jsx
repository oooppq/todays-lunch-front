/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import {
  JudgeNowListContainer,
  JudgeNowListLi,
  JudgeNowDetailModal,
} from './judgeNow.style';
import JudgeNowDetail from './JudgeNowDetail';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import defaultImg from '../../../assets/img/default-image.png';

const ListElem = ({ restaurant, setIsDetail, setSelected }) => {
  const { mutate } = useMutation(() =>
    axios.post(`/api/restaurants/judges/${restaurant.id}/agree`)
  );
  const { data: isLike } = useQuery(['recommendation', restaurant.id], () =>
    axios
      .get(`/api/restaurants/judges/${restaurant.id}/agree`)
      .then((res) => res.data)
  );

  return (
    <JudgeNowListLi
      onClick={() => {
        setIsDetail(true);
        setSelected(restaurant);
      }}
    >
      <img className="restImage" src={defaultImg} alt="" />
      {/* <img className="restImage" src={e.imageUrl} alt="" /> */}
      <div className="info">
        <div className="title">{restaurant.restaurantName}</div>
        <div className="content">
          <div className="up">
            <span>#{restaurant.foodCategory} </span>
            <span>#{restaurant.locationTag}</span>
          </div>
          <div className="down">#{restaurant.locationCategory}</div>
        </div>
        <div className="credit">post by {restaurant.member}</div>
      </div>
      <div className="recommend">
        <div
          className="imageOuter"
          aria-hidden="true"
          onClick={(event) => {
            mutate();
            event.stopPropagation();
          }}
          style={isLike ? { backgroundColor: '#6ab2b2' } : null}
        >
          <img src={thumbIcon} alt="" />
        </div>
        <div
          className="recomNum"
          style={isLike ? { backgroundColor: '#6ab2b2' } : null}
        >
          {restaurant.recommendationNum}
        </div>
      </div>
    </JudgeNowListLi>
  );
};
const JudgeNowList = ({ restaurantData }) => {
  const [isDetail, setIsDetail] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <JudgeNowListContainer>
      {isDetail ? (
        <JudgeNowDetailModal>
          <JudgeNowDetail
            restaurant={selected}
            setIsDetail={setIsDetail}
            inListFlag={1}
          />
        </JudgeNowDetailModal>
      ) : null}
      {restaurantData.map((restaurant) => (
        <ListElem
          key={`${restaurant.restaurantName},${restaurant.latitude},${restaurant.longitude}`}
          restaurant={restaurant}
          setIsDetail={setIsDetail}
          setSelected={setSelected}
        />
      ))}
    </JudgeNowListContainer>
  );
};

export default JudgeNowList;
