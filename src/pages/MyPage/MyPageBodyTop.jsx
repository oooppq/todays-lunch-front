/* eslint-disable react/prop-types */
import React from 'react';
import { MyPageTop } from './myPage.style';
import ChangeProfile from './ChangeProfile';
import ChangeCategory from './ChangeCategory';
import Loading from './Loading';
import { useMyPagePatch } from './myPage.helpers';
import ChangeCategoryModal from './ChangeCategoryModal';

const MyPageBodyTop = ({ userInfo, handleGotoOnClick }) => {
  const {
    isPatching,
    isNicknameChange,
    setIsNicknameChange,
    newNickname,
    setNewNickname,
    handleNicknameChange,
    handleProfileChange,
  } = useMyPagePatch(userInfo);

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
        <ChangeCategory
          userInfo={userInfo}
          handleGotoOnClick={handleGotoOnClick}
        />
      </MyPageTop>
      {isPatching ? <Loading /> : null}
      <ChangeCategoryModal userInfo={userInfo} title="활동영역" />
    </>
  );
};

export default MyPageBodyTop;
