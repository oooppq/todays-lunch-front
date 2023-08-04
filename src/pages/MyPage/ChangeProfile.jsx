/* eslint-disable react/prop-types */
import React from 'react';
import defaultIcon from '../../assets/img/default-icon.svg';
import cameraIcon from '../../assets/img/empty-camera-icon.svg';

const ChangeProfile = ({
  userInfo,
  isNicknameChange,
  isNicknameError,
  setIsNicknameChange,
  newNickname,
  setNewNickname,
  handleNicknameChange,
  handleProfileChange,
}) => {
  return (
    <div className="userInfo">
      <div className="profileImgOuter">
        <label htmlFor="profileImgInput">
          <div className="changeProfileImgBtn">
            <img src={cameraIcon} alt="" className="" />
          </div>
          <img
            src={userInfo.icon || defaultIcon}
            alt=""
            className="profileImg"
          />
          <input
            id="profileImgInput"
            type="file"
            accept="image/*"
            onChange={handleProfileChange}
          />
        </label>
      </div>
      <div className="userName">
        {isNicknameChange ? (
          <>
            <input
              type="text"
              className="nicknameInput"
              value={newNickname}
              onChange={(e) => {
                setNewNickname(e.target.value);
              }}
            />
            {isNicknameError && (
              <div className="nicknameChangeError">
                한글,영문,숫자로 이루어진 1~7자리
              </div>
            )}
          </>
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
