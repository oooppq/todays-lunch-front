import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserPageHeader from '../../components/UserPageHeader';
import { MyPageContainer } from './myPage.style';
import userIcon from '../../assets/img/user-colored-icon.svg';
import warningIcon from '../../assets/img/yellow-warning-icon.svg';
import { useMyPage } from './myPage.helpers';
import MyPageBodyTop from './MyPageBodyTop';
import MyPageBodyBottom from './MyPageBodyBottom';
import MyPageFooter from './MyPageFooter';

const MyPage = () => {
  const {
    userInfo,
    userInfoIsFetching,
    userInfoError,
    verified,
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
      {verified ? null : (
        <div className="notVerifiedWarning">
          <img src={warningIcon} alt="" className="warningIcon" />
          <div className="notVerifiedWarningComment">
            유저 인증이 완료되지 않았습니다. <br />
            {/* 이메일 미인증 유저는 비밀번호 찾기 기능을 이용하실 수 없습니다. */}
            {/* <br /> */}
            가입하신 이메일의 메일함을 확인하고 인증을 완료해주세요.
          </div>
        </div>
      )}
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
