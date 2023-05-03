/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import {
  JudgeNowListContainer,
  JudgeNowListLi,
  JudgeNowDetailModal,
} from '../../Judge/JudgeNow/judgeNow.style';
import JudgeNowDetail from '../../Judge/JudgeNow/JudgeNowDetail';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import defaultImg from '../../../assets/img/default-image.png';
import { MyJudgeContainer } from './myJudge.style';

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
const restaurantData = [
  {
    id: 1,
    restaurantName: '가츠벤또',
    imageUrl: '',
    latitude: 37.5533674,
    longitude: 126.937563,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '일식',
    address: '짱짱주소',
    judgement: true,
    introduction:
      '리뷰에 대한 글 리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글',
    recommendationNum: 2,
    member: '오대균',
  },
  {
    id: 2,
    restaurantName: '마포돼지불백',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '한식',
    address: '짱짱주소',
    judgement: true,
    introduction:
      '리뷰에 대한 글 리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글',
    recommendationNum: 3,
    member: '박다빈',
  },
];
const MyJudge = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [selected, setSelected] = useState(null);
  return (
    <MyJudgeContainer>
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
    </MyJudgeContainer>
  );
};

export default MyJudge;
