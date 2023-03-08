import React, { useState } from 'react';
import {
  JudgeNowListContainer,
  JudgeNowListLi,
  JudgeNowDetailModal,
} from './judgeNow.style';
import JudgeNowDetail from './JudgeNowDetail';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import defaultImg from '../../../assets/img/default-image.png';

const JudgeNowList = () => {
  const [isDetail, setIsDetail] = useState(false);
  // const [selected, setSelected] = useState(null);

  return (
    <JudgeNowListContainer>
      {isDetail ? (
        <JudgeNowDetailModal>
          <JudgeNowDetail setIsDetail={setIsDetail} inListFlag={1} />
        </JudgeNowDetailModal>
      ) : null}
      <JudgeNowListLi
        onClick={() => {
          setIsDetail(true);
          //   setSelected(e);
        }}
      >
        <img className="restImage" src={defaultImg} alt="" />
        <div className="info">
          <div className="title">마포리 1987</div>
          <div className="content">
            <div className="up">
              <span>#양식 </span>
              <span>#경숲길</span>
            </div>
            <div className="down">#서강대학교</div>
          </div>
          <div className="credit">post by 오대균</div>
        </div>
        <div className="recommend">
          <div className="imageOuter">
            <img src={thumbIcon} alt="" />
          </div>
          <div className="recomNum">1</div>
        </div>
      </JudgeNowListLi>
      <JudgeNowListLi>
        <img className="restImage" src={defaultImg} alt="" />
        <div className="info">
          <div className="title">마포리 1987</div>
          <div className="content">
            <div className="up">
              <span>#양식 </span>
              <span>#경숲길</span>
            </div>
            <div className="down">#서강대학교</div>
          </div>
          <div className="credit">post by 오대균</div>
        </div>
        <div className="recommend">
          <div className="imageOuter">
            <img src={thumbIcon} alt="" />
          </div>
          <div className="recomNum">1</div>
        </div>
      </JudgeNowListLi>
    </JudgeNowListContainer>
  );
};

export default JudgeNowList;
