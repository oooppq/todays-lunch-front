/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  JudgeNowListContainer,
  JudgeNowListLi,
  JudgeNowDetailModal,
} from './judgeNow.style';
import JudgeNowDetail from './JudgeNowDetail';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import defaultImg from '../../../assets/img/default-image.png';

const JudgeNowList = ({ data, mutate }) => {
  const [isDetail, setIsDetail] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <JudgeNowListContainer>
      {isDetail ? (
        <JudgeNowDetailModal>
          <JudgeNowDetail
            detail={selected}
            mutate={mutate}
            setIsDetail={setIsDetail}
            inListFlag={1}
          />
        </JudgeNowDetailModal>
      ) : null}
      {data.map((e) => (
        <JudgeNowListLi
          key={`${e.restaurantName},${e.latitude},${e.longitude}`}
          onClick={() => {
            setIsDetail(true);
            setSelected(e);
          }}
        >
          <img className="restImage" src={defaultImg} alt="" />
          {/* <img className="restImage" src={e.imageUrl} alt="" /> */}
          <div className="info">
            <div className="title">{e.restaurantName}</div>
            <div className="content">
              <div className="up">
                <span>#{e.foodCategory} </span>
                <span>#{e.locationTag}</span>
              </div>
              <div className="down">#{e.locationCategory}</div>
            </div>
            <div className="credit">post by {e.member}</div>
          </div>
          <div className="recommend">
            <div
              className="imageOuter"
              aria-hidden="true"
              onClick={() => {
                mutate(e.id);
              }}
            >
              <img src={thumbIcon} alt="" />
            </div>
            <div className="recomNum">{e.recommendationNum}</div>
          </div>
        </JudgeNowListLi>
      ))}
    </JudgeNowListContainer>
  );
};

export default JudgeNowList;
