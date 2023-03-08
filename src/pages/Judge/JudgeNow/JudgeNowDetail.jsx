/* eslint-disable react/prop-types */
import React from 'react';
import { JudgeNowDetailContainer, JudgeNowDetailInfo } from './judgeNow.style';
import defaultImg from '../../../assets/img/default-image.png';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import xIcon from '../../../assets/img/x-icon.svg';

const JudgeNowDetail = ({ detail, mutate, setIsDetail, inListFlag }) => {
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
        <div className="title">{detail.restaurantName}</div>
        <div className="tags">
          <div className="tag">#{detail.foodCategory}</div>
          <div className="tag">#{detail.locationTag}</div>
        </div>
        <div className="content">{detail.introduction}</div>
        <div className="mapBtn">지도 위치 보기</div>
        <div className="credit">post by {detail.member}</div>
        <div className="recommend">
          <div
            className="imageOuter"
            aria-hidden="true"
            onClick={() => {
              mutate(detail.id);
            }}
          >
            <img src={thumbIcon} alt="" />
          </div>
          <div className="recomNum">{detail.recommendationNum}</div>
        </div>
      </JudgeNowDetailInfo>
    </JudgeNowDetailContainer>
  );
};

export default JudgeNowDetail;
