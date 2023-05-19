/* eslint-disable react/prop-types */
import React from 'react';
import { MyPageTop } from './myPage.style';
import ChangeProfile from './ChangeProfile';
import MyPageNavigator from './MyPageNavigator';
import Loading from './Loading';
import { useProfileChange } from './myPage.helpers';

const MyPageBodyTop = ({ userInfo, handleGotoOnClick }) => {
  const {
    isProfileChanging,
    isNicknameChange,
    setIsNicknameChange,
    newNickname,
    setNewNickname,
    handleNicknameChange,
    handleProfileChange,
  } = useProfileChange(userInfo);

  return (
    <>
      <MyPageTop>
        <ChangeProfile
          userInfo={userInfo}
          isNicknameChange={isNicknameChange}
          setIsNicknameChange={setIsNicknameChange}
          newNickname={newNickname}
          setNewNickname={setNewNickname}
          handleNicknameChange={handleNicknameChange}
          handleProfileChange={handleProfileChange}
        />
        <MyPageNavigator
          userInfo={userInfo}
          handleGotoOnClick={handleGotoOnClick}
        />
      </MyPageTop>
      {isProfileChanging ? <Loading /> : null}
    </>
  );
};

export default MyPageBodyTop;
