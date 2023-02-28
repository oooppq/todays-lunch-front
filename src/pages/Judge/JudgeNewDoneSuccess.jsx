/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import defaultIcon from '../../assets/img/default-icon.svg';
import xIcon from '../../assets/img/x-icon.svg';

const JudgeNewDoneSuccess = ({ isLoading }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        className="xBtn"
        onClick={() => {
          navigate('/');
        }}
      >
        <img src={xIcon} alt="" />
      </button>
      <div className="successDiv">
        {isLoading ? (
          <div>등록중입니다.</div>
        ) : (
          <div>
            맛집 추가가 성공적으로
            <br />
            완료되었습니다.
          </div>
        )}
        <img src={defaultIcon} alt="" />
        <div>감사합니다.</div>
      </div>
      {isLoading ? null : (
        <button
          type="button"
          className="doneBtn"
          onClick={() => {
            navigate('../list');
          }}
        >
          다음
        </button>
      )}
    </>
  );
};

export default JudgeNewDoneSuccess;
