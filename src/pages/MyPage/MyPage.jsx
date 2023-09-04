import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserPageHeader from '../../components/UserPageHeader';
import { MyPageContainer } from './myPage.style';
import userIcon from '../../assets/img/user-colored-icon.svg';
import { useMyPage } from './myPage.helpers';
import MyPageBodyTop from './MyPageBodyTop';
import MyPageBodyBottom from './MyPageBodyBottom';
import MyPageFooter from './MyPageFooter';

const MyPage = () => {
  const {
    userInfo,
    userInfoIsFetching,
    userInfoError,
    // isLogoutLoading,
    handleLogoutOnClick,
    handleGoToLogout,
    handleGotoOnClick,
  } = useMyPage(useNavigate());

  if (userInfoIsFetching || userInfoError) return null;

  return (
    <MyPageContainer>
      <UserPageHeader>
        <div className="pageTitle">
          <img src={userIcon} alt="" />
          마이페이지
        </div>
      </UserPageHeader>
      <MyPageBodyTop
        userInfo={userInfo}
        handleGotoOnClick={handleGotoOnClick}
      />
      <MyPageBodyBottom userInfo={userInfo} />
      <MyPageFooter
        handleLogoutOnClick={handleLogoutOnClick}
        handleGoToLogout={handleGoToLogout}
        handleGotoOnClick={handleGotoOnClick}
      />
    </MyPageContainer>
  );
};

export default MyPage;
