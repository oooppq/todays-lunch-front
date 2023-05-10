import React from 'react';
import {
  ChangePasswordBody,
  ChangePasswordContainer,
  ChangePasswordHeader,
} from './changePassword.style';
import UserPageHeader from '../../../components/UserPageHeader';

const ChangePassword = () => {
  return (
    <ChangePasswordContainer>
      <UserPageHeader>
        <div className="pageTitle">심사중인 맛집</div>
      </UserPageHeader>
      <ChangePasswordHeader>
        <div className="">📌 비밀번호 수정</div>
      </ChangePasswordHeader>
      <ChangePasswordBody>
        <div className="">아이디</div>
        <input type="text" className="id" disabled />
        <div className="">현재 비밀번호</div>
        <input type="text" className="currentPwd" placeholder="비밀번호" />
        <div className="">새로운 비밀번호</div>
        <input type="text" className="newPwd" placeholder="새로운 비밀번호" />
        <div className="">새로운 비밀번호 확인</div>
        <input
          type="text"
          className="newPwdCheck"
          placeholder="비밀번호 확인"
        />
        <button type="button" className="submitBtn">
          수정하기
        </button>
      </ChangePasswordBody>
    </ChangePasswordContainer>
  );
};

export default ChangePassword;
