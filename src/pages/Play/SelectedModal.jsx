/* eslint-disable react/prop-types */

import React from 'react';
import { SelectedModalContainer } from './play.style';
import xIcon from '../../assets/img/x-icon.svg';
import { convertNum } from '../../libs/utils';
import { useShare } from '../../libs/common.helpers';
import CroppedImage from '../../components/CroppedImage';

const SelectedModal = ({
  closeSelectedModal,
  selectedRestaurant,
  goToDetail,
}) => {
  const { isShareModalOpen, ShareModalBtn, ShareModal } =
    useShare(selectedRestaurant);

  return (
    <>
      {isShareModalOpen && <ShareModal />}
      <SelectedModalContainer>
        <div className="modalInner">
          <button
            type="button"
            className="closeBtn"
            onClick={closeSelectedModal}
          >
            <img src={xIcon} alt="" className="" />
          </button>
          <div className="modalHeader">오늘의 점심은?</div>
          <CroppedImage
            src={selectedRestaurant.imageUrl}
            style={{
              marginBottom: '7px',
              width: '140px',
              height: '140px',
              borderRadius: '3px',
            }}
          />

          <div className="restaurantNameAndRating">
            {selectedRestaurant.restaurantName}
            <span className="rating">
              {selectedRestaurant.rating.toFixed(1)}
            </span>
          </div>
          <div className="tags">
            <div className="">#{selectedRestaurant.locationCategory}</div>
            <div className="">#{selectedRestaurant.foodCategory}</div>
          </div>
          <div className="review">
            <span className="number">
              {convertNum(selectedRestaurant.reviewCount)}
            </span>
            개의 리뷰
          </div>
          <div className="innerBtns">
            <button
              type="button"
              className="detailBtn"
              onClick={() => {
                goToDetail(selectedRestaurant.id);
              }}
            >
              자세히
            </button>
            <ShareModalBtn />
          </div>
        </div>
      </SelectedModalContainer>
    </>
  );
};

export default SelectedModal;
