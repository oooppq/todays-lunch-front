import React from 'react';
import { JudgeNowListContainer, JudgeNowListLi } from './judgeNow.style';
import thumbIcon from '../../../assets/img/small-thumb-icon.svg';
import defaultImg from '../../../assets/img/default-image.png';

const JudgeNowList = () => {
  return (
    <JudgeNowListContainer>
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
