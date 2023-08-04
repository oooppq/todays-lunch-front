/* eslint-disable react/prop-types */
import React from 'react';
import { MyPageTop } from './myPage.style';
import ChangeProfile from './ChangeProfile';
import MyPageNavigator from './MyPageNavigator';
import Loading from '../../components/Loading';
import { useProfileChange } from './myPage.helpers';

const MyPageBodyTop = ({ userInfo, handleGotoOnClick }) => {
  const {
    isProfileChanging,
    isNicknameChange,
    setIsNicknameChange,
    isNicknameError,
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
          isNicknameError={isNicknameError}
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
