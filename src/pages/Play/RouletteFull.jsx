/* eslint-disable react/prop-types */
import React from 'react';
import warningIcon from '../../assets/img/yellow-warning-icon.svg';

const RouletteFull = ({ isFullError, addFlag, toAdd, addHandler }) => {
  return (
    <>
      {isFullError && (
        <div className="fullErrorContainer">
          <img src={warningIcon} alt="" className="warningIcon" />
          <div className="warningMessage">
            룰렛이 가득 찼습니다. <br /> 기존에 추가한 맛집을 제거하고 다시
            시도해주세요.
          </div>
        </div>
      )}
      {addFlag && (
        <div className="toAddContainer">
          클릭하여{' '}
          <button type="button" className="toAddBtn" onClick={addHandler}>
            {toAdd.restaurantName}
          </button>{' '}
          을(를) 룰렛에 추가
        </div>
      )}
    </>
  );
};

export default RouletteFull;
