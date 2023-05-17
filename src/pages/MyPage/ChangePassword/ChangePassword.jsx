import React from 'react';
import {
  ChangePasswordBody,
  ChangePasswordContainer,
  ChangePasswordHeader,
} from './changePassword.style';
import UserPageHeader from '../../../components/UserPageHeader';
import WarningMessage from './WarningMessage';
import ChangeSuccess from './ChangeSuccess';
import { useChangePassword, useMyPage } from '../myPage.helpers';

const ChangePassword = () => {
  const { userInfo, userInfoIsFetching, userInfoError } = useMyPage();
  const {
    states,
    passwordChangeState,
    setCurrentPassword,
    setNewPassword,
    setNewPasswordConfirm,
    handlePasswordChangeSubmit,
  } = useChangePassword();

  return (
    <ChangePasswordContainer>
      <UserPageHeader>
        <div className="pageTitle">비밀번호 변경</div>
      </UserPageHeader>
      {passwordChangeState !== states.SUCCESS ? (
        <>
          <ChangePasswordHeader>
            <div className="">📌 비밀번호 변경</div>
          </ChangePasswordHeader>
          <ChangePasswordBody>
            <div className="inputLabel">아이디</div>
            <input
              type="text"
              className="input id"
              value={userInfoIsFetching || userInfoError ? '' : userInfo.email}
              disabled
            />
            <div className="inputLabel">현재 비밀번호</div>
            <input
              type="password"
              className="input currentPwd"
              placeholder="비밀번호"
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
            />
            <div className="inputLabel">새로운 비밀번호</div>
            <div className="passwordCondition">
              (영문 대소문자, 숫자, 특수문자가 최소 1개 이상씩 포함된 8~16자리)
            </div>
            <input
              type="password"
              className="input newPwd"
              placeholder="새로운 비밀번호"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            <div className="inputLabel">새로운 비밀번호 확인</div>
            <input
              type="password"
              className="input newPwdCheck"
              placeholder="비밀번호 확인"
              onChange={(e) => {
                setNewPasswordConfirm(e.target.value);
              }}
            />
            <WarningMessage
              states={states}
              passwordChangeState={passwordChangeState}
            />
            <button
              type="button"
              className="submitBtn"
              onClick={handlePasswordChangeSubmit}
            >
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
