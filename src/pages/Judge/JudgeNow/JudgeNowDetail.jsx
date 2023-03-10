/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { JudgeNowDetailContainer, JudgeNowDetailInfo } from './judgeNow.style';
import defaultImg from '../../../assets/img/default-image.png';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import xIcon from '../../../assets/img/x-icon.svg';

const JudgeNowDetail = ({ restaurant, setIsDetail, inListFlag }) => {
  const [like, setLike] = useState(false);

  const { mutate } = useMutation(() =>
    axios.post(`/api/restaurants/judges/${restaurant.id}/agree`)
  );
  const { refetch } = useQuery(['recommendation', restaurant.id], () =>
    axios.get(`/api/restaurants/judges/${restaurant.id}/agree`).then((res) => {
      setLike(res.data);
      return res.data;
    })
  );

  return (
    <JudgeNowDetailContainer>
      <img src={defaultImg} alt="" className="restImg" />
      {inListFlag ? (
        <button
          className="xBtn"
          type="button"
          onClick={() => {
            setIsDetail(false);
          }}
        >
          <img src={xIcon} alt="" />
        </button>
      ) : null}
      <JudgeNowDetailInfo>
        <div className="title">{restaurant.restaurantName}</div>
        <div className="tags">
          <div className="tag">#{restaurant.foodCategory}</div>
          <div className="tag">#{restaurant.locationTag}</div>
        </div>
        <div className="content">{restaurant.introduction}</div>
        <div className="mapBtn">지도 위치 보기</div>
        <div className="credit">post by {restaurant.member}</div>
        <div className="recommend">
          <div
            className="imageOuter"
            aria-hidden="true"
            onClick={() => {
              mutate();
              setLike(!like);
              refetch();
            }}
            style={like ? { backgroundColor: '#6ab2b2' } : null}
          >
            <img src={thumbIcon} alt="" />
          </div>
          <div
            className="recomNum"
            style={like ? { backgroundColor: '#6ab2b2' } : null}
          >
            {restaurant.recommendationNum}
          </div>
        </div>
      </JudgeNowDetailInfo>
    </JudgeNowDetailContainer>
  );
};

export default React.memo(JudgeNowDetail);
