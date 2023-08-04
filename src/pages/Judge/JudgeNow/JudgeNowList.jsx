/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  JudgeNowListContainer,
  JudgeNowListLi,
  JudgeNowDetailModal,
} from './judgeNow.style';
import JudgeNowDetail from './JudgeNowDetail';
import { useJudgeAgree } from './judgeNow.helpers';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import defaultImg from '../../../assets/img/default-image.png';

const JudgeNowListElem = ({ restaurant }) => {
  const [isDetail, setIsDetail] = useState(false);
  const { pushAgree } = useJudgeAgree(restaurant.id);
  const navigate = useNavigate();

  return (
    <>
      {isDetail ? (
        <JudgeNowDetailModal>
          <JudgeNowDetail
            id={restaurant.id}
            inListFlag
            setIsDetail={setIsDetail}
          />
        </JudgeNowDetailModal>
      ) : null}
      <JudgeNowListLi
        onClick={() => {
          setIsDetail(true);
        }}
      >
        <img
          className="restImage"
          src={restaurant.imageUrl || defaultImg}
          alt=""
        />
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
          <div className="credit">post by {restaurant.registrant}</div>
        </div>
        <div
          className="recommend"
          onClick={(e) => {
            // if (isAgreed) setAgreementCount((state) => state - 1);
            // else setAgreementCount((state) => state + 1);
            // setIsAgreed((state) => !state);

            pushAgree(navigate);
            e.stopPropagation();
          }}
        >
          <div
            className="imageOuter"
            aria-hidden="true"
            style={restaurant.agreed ? { backgroundColor: '#6ab2b2' } : null}
          >
            <img src={thumbIcon} alt="" />
          </div>
          <div
            className="recomNum"
            style={restaurant.agreed ? { backgroundColor: '#6ab2b2' } : null}
          >
            {restaurant.agreementCount}
          </div>
        </div>
      </JudgeNowListLi>
    </>
  );
};

const JudgeNowList = ({ restaurants }) => {
  return (
    <JudgeNowListContainer>
      {restaurants.map((restaurant) => (
        <JudgeNowListElem key={restaurant.id} restaurant={restaurant} />
      ))}
    </JudgeNowListContainer>
  );
};

export default JudgeNowList;
