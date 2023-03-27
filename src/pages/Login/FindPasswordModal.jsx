/* eslint-disable react/prop-types */
import React from 'react';
import { FindPasswordModalContainer } from './login.style';
import xIcon from '../../assets/img/x-icon.svg';

const FindPasswordModal = ({ closeFindPassword }) => {
  return (
    <FindPasswordModalContainer>
      <div className="modalInner">
        <button className="closeBtn" type="button" onClick={closeFindPassword}>
          <img src={xIcon} alt="" />
        </button>
      </div>
    </FindPasswordModalContainer>
  );
};

export default FindPasswordModal;
