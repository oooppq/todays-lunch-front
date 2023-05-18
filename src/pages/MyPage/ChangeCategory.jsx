/* eslint-disable react/prop-types */
import React from 'react';

const ChangeCategory = ({ userInfo, handleGotoOnClick }) => {
  return (
    <div className="myPageBtns">
      <button
        type="button"
        id="my-judge"
        className="myPageBtn"
        onClick={handleGotoOnClick}
      >
        <div className="count">{userInfo.myJudgeCount}</div>
        심사중인
        <br />
        맛집
      </button>
      <button
        type="button"
        id="participating-restaurant"
        className="myPageBtn"
        onClick={handleGotoOnClick}
      >
        <div className="count">{userInfo.paricipationCount}</div>
        참여한
        <br />
        맛집
      </button>
      <button
        type="button"
        id="my-review"
        className="myPageBtn"
        onClick={handleGotoOnClick}
      >
        <div className="count">{userInfo.reviewCount}</div>
        남긴
        <br />
        리뷰
      </button>
    </div>
  );
};

export default ChangeCategory;
