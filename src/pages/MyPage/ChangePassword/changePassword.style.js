import styled from 'styled-components';

export const ChangePasswordContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 67px 25px 0 25px;
  max-width: 390px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  .pageTitle {
    display: flex;
    align-items: center;
    font-family: Pretendard-Medium;
    font-size: 20px;
  }
`;

export const ChangePasswordHeader = styled.div`
  margin-top: 32px;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
`;

export const ChangePasswordBody = styled.div`
  margin: 29px 11px 0 11px;
  .inputLabel {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .input {
    width: 100%;
    height: 43px;
    padding: 0 12px;
    box-sizing: border-box;
    margin-bottom: 17px;
    background-color: #f4f4f4;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
  }
  .submitBtn {
    margin-top: 11px;
    width: 100%;
    height: 44px;
    background-color: black;
    border-radius: 3px;
    font-family: Pretendard-SemiBold;
    font-size: 18px;
    color: white;
  }
`;

export const ChangeSuccessContainer = styled.div`
  margin-top: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .successComment {
    height: 42px;
    width: 190px;
    text-align: center;
  }
  .okBtn {
    margin-top: 37px;
    background: #000000;
    border-radius: 20px;
    font-family: 'Pretendard-SemiBold';
    font-size: 18px;
    color: white;
    width: 188px;
    height: 41px;
  }
`;

export const WarningMessageContainer = styled.div`
  height: 16px;
  font-size: 13px;
  color: #ca2d18;
`;
