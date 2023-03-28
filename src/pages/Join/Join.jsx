import React from 'react';
import UserPageHeader from '../../components/UserPageHeader';
import { JoinContainer } from './join.style';
import jmcIcon from '../../assets/img/user-jmc-icon.svg';
import JoinBodyFirst from './JoinBodyFirst';
// import JoinBodySecond from './JoinBodySecond';

const Join = () => {
  return (
    <JoinContainer>
      <UserPageHeader />
      <div className="joinLogoAndTitle">
        <img src={jmcIcon} alt="" className="joinLogo" />
        <div className="joinTitle">회원가입</div>
      </div>
      <JoinBodyFirst />
      {/* <JoinBodySecond /> */}
    </JoinContainer>
  );
};

export default Join;
