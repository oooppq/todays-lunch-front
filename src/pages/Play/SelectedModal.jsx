/* eslint-disable react/prop-types */

import React from 'react';
import { SelectedModalContainer } from './play.style';
import xIcon from '../../assets/img/x-icon.svg';
import { convertNum } from '../../libs/utils';

const SelectedModal = ({
  closeSelectedModal,
  selectedRestaurant,
  goToDetail,
}) => {
  return (
    <SelectedModalContainer>
      <div className="modalInner">
        <button type="button" className="closeBtn" onClick={closeSelectedModal}>
          <img src={xIcon} alt="" className="" />
        </button>
        <div className="modalHeader">오늘의 점심은?</div>
        <img src={selectedRestaurant.imgUrl} alt="" className="restaurantImg" />
        <div className="restaurantNameAndRating">
          {selectedRestaurant.restaurantName}
          <span className="rating">{selectedRestaurant.rating}</span>
        </div>
        <div className="tags">
          <div className="">#{selectedRestaurant.locationCategory}</div>
          <div className="">#{selectedRestaurant.foodCategory}</div>
        </div>
        <div className="review">
          <span className="number">
            {convertNum(selectedRestaurant.review_number)}
          </span>
          개의 리뷰
        </div>
        <button
          type="button"
          className="detailBtn"
          onClick={() => {
            goToDetail(selectedRestaurant.id);
          }}
        >
          자세히
        </button>
        <button type="button" className="shareBtn">
          결과 공유하기
        </button>
      </div>
    </SelectedModalContainer>
  );
};

export default SelectedModal;
