import React from 'react';
import {
  ChangePasswordBody,
  ChangePasswordContainer,
  ChangePasswordHeader,
} from './changePassword.style';
import UserPageHeader from '../../../components/UserPageHeader';
import WarningMessage from './WarningMessage';
import ChangeSuccess from './ChangeSuccess';

const ChangePassword = () => {
  const temp = true;
  return (
    <ChangePasswordContainer>
      <UserPageHeader>
        <div className="pageTitle">비밀번호 변경</div>
      </UserPageHeader>
      {temp ? (
        <>
          <ChangePasswordHeader>
            <div className="">📌 비밀번호 수정</div>
          </ChangePasswordHeader>
          <ChangePasswordBody>
            <div className="inputLabel">아이디</div>
            <input
              type="text"
              className="input id"
              value="알바트로스"
              disabled
            />
            <div className="inputLabel">현재 비밀번호</div>
            <input
              type="password"
              className="input currentPwd"
              placeholder="비밀번호"
            />
            <div className="inputLabel">새로운 비밀번호</div>
            <input
              type="password"
              className="input newPwd"
              placeholder="새로운 비밀번호"
            />
            <div className="inputLabel">새로운 비밀번호 확인</div>
            <input
              type="password"
              className="input newPwdCheck"
              placeholder="비밀번호 확인"
            />
            <WarningMessage state="different" />
            <button type="button" className="submitBtn">
              비밀번호 변경
            </button>
          </ChangePasswordBody>
        </>
      ) : (
        <ChangeSuccess />
      )}
    </ChangePasswordContainer>
  );
};

export default ChangePassword;
