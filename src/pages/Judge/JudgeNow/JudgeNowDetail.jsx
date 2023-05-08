/* eslint-disable react/prop-types */
import React from 'react';
import { JudgeNowDetailContainer, JudgeNowDetailInfo } from './judgeNow.style';
import defaultImg from '../../../assets/img/default-image.png';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import xIcon from '../../../assets/img/x-icon.svg';
import { useJudgeNowDetail } from './judgeNow.helpers';

const JudgeNowDetail = ({ id, setIsDetail, inListFlag }) => {
  const {
    restaurant,
    restaurantIsLoading,
    restaurantIsError,
    pushAgree,
    isAgree,
  } = useJudgeNowDetail(id);

  if (restaurantIsLoading || restaurantIsError) return null;

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
        <a
          href={`https://map.kakao.com/link/map/${restaurant.restaurantName},${restaurant.latitude},${restaurant.longitude}`}
          target="_blank"
          rel="noreferrer"
          className="linkToKakaoMap"
        >
          지도 위치 보기
        </a>
        <div className="credit">post by {restaurant.registrant}</div>
        <div className="recommend">
          <div
            className="imageOuter"
            aria-hidden="true"
            onClick={pushAgree}
            style={isAgree ? { backgroundColor: '#6ab2b2' } : null}
          >
            <img src={thumbIcon} alt="" />
          </div>
          <div
            className="recomNum"
            style={isAgree ? { backgroundColor: '#6ab2b2' } : null}
          >
            {restaurant.agreementCount}
          </div>
        </div>
      </JudgeNowDetailInfo>
    </JudgeNowDetailContainer>
  );
};

export default JudgeNowDetail;
