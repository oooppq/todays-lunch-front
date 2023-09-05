import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  JudgeContainer,
  JudgeHeader,
  JudgeBody,
  JudgeBtn,
} from './judge.style';
import defaultIcon from '../../assets/img/default-icon.svg';
import pencilIcon from '../../assets/img/pencil-icon.png';
import thumbIcon from '../../assets/img/thumb-icon.png';

const JudgeHome = () => {
  const navigate = useNavigate();

  return (
    <JudgeContainer>
      <JudgeHeader>
        <img src={defaultIcon} alt="" />
        <div className="announce">
          맛집 등록과 맛집 평가에 활발하게 참여한 유저에게는 항상 행운이
          가득하실거에요!
        </div>
      </JudgeHeader>
      <JudgeBody>
        <JudgeBtn
          onClick={() => {
            navigate('./new');
          }}
        >
          <img src={pencilIcon} alt="" className="pencil" />
          <div className="info">
            <div className="infoTitle">새로운 맛집 등록하기</div>
            <div className="infoComment">지도에 없는 맛집을 등록해 주세요.</div>
          </div>
        </JudgeBtn>
        <JudgeBtn
          onClick={() => {
            navigate('./now');
          }}
        >
          <img
            src={thumbIcon}
            alt=""
            height="55px"
            width="55px"
            className="thumb"
          />
          <div className="info">
            <div className="infoTitle">맛집 심사하기</div>
            <div className="infoComment">심사중인 맛집을 평가해주세요.</div>
          </div>
        </JudgeBtn>
      </JudgeBody>
    </JudgeContainer>
  );
};

export default JudgeHome;
