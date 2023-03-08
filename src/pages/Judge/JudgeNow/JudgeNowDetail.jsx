/* eslint-disable react/prop-types */
import React from 'react';
import { JudgeNowDetailContainer, JudgeNowDetailInfo } from './judgeNow.style';
import defaultImg from '../../../assets/img/default-image.png';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import xIcon from '../../../assets/img/x-icon.svg';

const JudgeNowDetail = ({ setIsDetail, inListFlag }) => {
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
        <div className="title">마포리 1987</div>
        <div className="tags">
          <div className="tag">#양식</div>
          <div className="tag">#경숲길</div>
        </div>
        <div className="content">
          리뷰에 대한 글 리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한
          글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글리뷰에 대한 글 글리뷰에
          대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한
          글리뷰에 대한 글 글리뷰에 대한 글리뷰에 대한 글 글리뷰에 대한 글리뷰에
          대한 글
        </div>
        <div className="mapBtn">지도 위치 보기</div>
        <div className="credit">post by 오대균</div>
        <div className="recommend">
          <div className="imageOuter">
            <img src={thumbIcon} alt="" />
          </div>
          <div className="recomNum">1</div>
        </div>
      </JudgeNowDetailInfo>
    </JudgeNowDetailContainer>
  );
};

export default JudgeNowDetail;
