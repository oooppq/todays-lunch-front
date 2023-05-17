/* eslint-disable react/prop-types */
import React from 'react';
import { MyPageTop } from './myPage.style';
import defaultIcon from '../../assets/img/default-icon.svg';
import cameraIcon from '../../assets/img/empty-camera-icon.svg';

const MyPageBodyTop = ({
  userInfo,
  handleGotoOnClick,
  isNicknameChange,
  setIsNicknameChange,
  newNickname,
  setNewNickname,
  handleNicknameChange,
  handleProfileChange,
}) => {
  return (
    <MyPageTop>
      <div className="userInfo">
        <div className="profileImgOuter">
          <button type="button" className="changeProfileImgBtn">
            <img src={cameraIcon} alt="" className="" />
          </button>
          <label htmlFor="input-file">
            <img
              src={userInfo.icon || defaultIcon}
              alt=""
              className="profileImg"
            />
            <input
              id="input-file"
              type="file"
              accept="image/*"
              onChange={handleProfileChange}
            />
          </label>
        </div>
        <div className="userName">
          {isNicknameChange ? (
            <input
              type="text"
              className="nicknameInput"
              value={newNickname}
              onChange={(e) => {
                setNewNickname(e.target.value);
              }}
            />
          ) : (
            <>
              <span className="nicknameSpan">{userInfo.nickname}</span>님
            </>
          )}
        </div>
        {isNicknameChange ? (
          <button
            type="button"
            className="changeNameDoneBtn"
            onClick={handleNicknameChange}
          >
            확인
          </button>
        ) : (
          <button
            type="button"
            className="changeNameBtn"
            onClick={() => {
              setIsNicknameChange(true);
            }}
          >
            수정하기
          </button>
        )}
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
          id="participating-restaurant"
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
