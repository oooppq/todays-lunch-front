import React from 'react';
import { ChangeSuccessContainer } from './changePassword.style';

const ChangeSuccess = () => {
  return (
    <ChangeSuccessContainer>
      <div className="successComment">
        비밀번호 수정이 성공적으로 완료 되었습니다.
      </div>
      <button type="button" className="okBtn">
        확인
      </button>
    </ChangeSuccessContainer>
  );
};

export default ChangeSuccess;
