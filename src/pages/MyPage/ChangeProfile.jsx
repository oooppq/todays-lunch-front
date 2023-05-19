/* eslint-disable react/prop-types */
import React from 'react';
import defaultIcon from '../../assets/img/default-icon.svg';
import cameraIcon from '../../assets/img/empty-camera-icon.svg';

const ChangeProfile = ({
  userInfo,
  isNicknameChange,
  setIsNicknameChange,
  newNickname,
  setNewNickname,
  handleNicknameChange,
  handleProfileChange,
}) => {
  return (
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
  );
};

export default ChangeProfile;
