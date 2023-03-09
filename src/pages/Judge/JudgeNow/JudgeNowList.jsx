/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useQueries } from 'react-query';
import axios from 'axios';
import {
  JudgeNowListContainer,
  JudgeNowListLi,
  JudgeNowDetailModal,
} from './judgeNow.style';
import JudgeNowDetail from './JudgeNowDetail';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import defaultImg from '../../../assets/img/default-image.png';

const JudgeNowList = ({ restaurantData, mutate }) => {
  const [isDetail, setIsDetail] = useState(false);
  const [selected, setSelected] = useState(null);

  const recomRess = useQueries(
    restaurantData.map((e) => {
      return {
        queryKey: ['recommendation', e.id],
        queryFn: () => axios.get(`/api/restaurants/judges/${e.id}/agree`),
        enabled: !!restaurantData,
      };
    })
  );

  if (recomRess.some((res) => res.isLoading)) return null;

  return (
    <JudgeNowListContainer>
      {isDetail ? (
        <JudgeNowDetailModal>
          <JudgeNowDetail
            detail={selected.data}
            mutate={mutate}
            recomFlag={recomRess[selected.idx].data.data}
            setIsDetail={setIsDetail}
            inListFlag={1}
          />
        </JudgeNowDetailModal>
      ) : null}
      {restaurantData.map((e, i) => (
        <JudgeNowListLi
          key={`${e.restaurantName},${e.latitude},${e.longitude}`}
          onClick={() => {
            setIsDetail(true);
            setSelected({ idx: i, data: e });
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
              style={
                recomRess[i].data.data ? { backgroundColor: '#6ab2b2' } : null
              }
            >
              <img src={thumbIcon} alt="" />
            </div>
            <div
              className="recomNum"
              style={
                recomRess[i].data.data ? { backgroundColor: '#6ab2b2' } : null
              }
            >
              {e.recommendationNum}
            </div>
          </div>
        </JudgeNowListLi>
      ))}
    </JudgeNowListContainer>
  );
};

export default JudgeNowList;
