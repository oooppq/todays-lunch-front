/* eslint-disable react/prop-types */
import React from 'react';
import { MyPageTop } from './myPage.style';
import defaultIcon from '../../assets/img/default-icon.svg';
import cameraIcon from '../../assets/img/empty-camera-icon.svg';

const MyPageBodyTop = ({ userInfo, handleGotoOnClick }) => {
  return (
    <MyPageTop>
      <div className="userInfo">
        <div className="profileImgOuter">
          <img
            src={userInfo.icon || defaultIcon}
            alt=""
            className="profileImg"
          />
          <button type="button" className="changeProfileImgBtn">
            <img src={cameraIcon} alt="" className="" />
          </button>
        </div>
        <div className="userName">
          <span>{userInfo.nickname}</span>님
        </div>
        <div className="changeName">수정하기</div>
      </div>
      <div className="myPageBtns">
        <button
          type="button"
          id="my-judge"
          className="myPageBtn"
          onClick={handleGotoOnClick}
        >
          <div className="count">{userInfo.myJudgeCount}</div>
          심사중인
          <br />
          맛집
        </button>
        <button
          type="button"
          id="my-restaurant"
          className="myPageBtn"
          onClick={handleGotoOnClick}
        >
          <div className="count">{userInfo.paricipationCount}</div>
          참여한
          <br />
          맛집
        </button>
        <button
          type="button"
          id="my-review"
          className="myPageBtn"
          onClick={handleGotoOnClick}
        >
          <div className="count">{userInfo.reviewCount}</div>
          남긴
          <br />
          리뷰
        </button>
      </div>
    </MyPageTop>
  );
};

export default MyPageBodyTop;
