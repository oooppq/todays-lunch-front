/* eslint-disable react/prop-types */
import React from 'react';

const EmailValidationMessage = ({ validationStatus }) => {
  let message;

  if (validationStatus === 'sent') {
    message = '입력하신 이메일 주소로 인증번호가 발송되었습니다.';
  } else if (validationStatus === 'success') {
    message = '인증이 완료되었습니다.';
  } else {
    message = '인증번호를 다시 확인해주세요.';
  }

  return (
    <div className={`validationMessage ${validationStatus}`}>{message}</div>
  );
};

export default EmailValidationMessage;
