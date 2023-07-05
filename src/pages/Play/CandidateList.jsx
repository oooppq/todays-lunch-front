/* eslint-disable react/prop-types */
import React from 'react';
import deleteIcon from '../../assets/img/delete-icon.svg';

const CandidateList = ({
  rouletteList,
  pushRoulette,
  goToDetail,
  goToRestaurants,
}) => {
  return (
    <div className="addedRestaurants">
      <div className="listTitle">
        음식점 목록
        <span className="listTitleSub">
          {' '}
          [최대 6개의 맛집을 담을 수 있어요]
        </span>
      </div>
      <ul className="restaurantsUl">
        {rouletteList &&
          rouletteList.map((restaurant) => (
            <li key={restaurant.id} className="restaurantLi">
              <button
                type="button"
                className="restaurantName"
                onClick={() => {
                  goToDetail(restaurant.id);
                }}
              >
                {restaurant.restaurantName}
              </button>
              <button
                type="button"
                className="deleteRestaurantBtn"
                onClick={() => {
                  pushRoulette(restaurant);
                }}
              >
                <img src={deleteIcon} alt="" className="deleteIcon" />
              </button>
            </li>
          ))}
        {rouletteList.length < 6 && (
          <button
            type="button"
            className="moreRestaurantBtn"
            onClick={goToRestaurants}
          >
            더 담기 +
          </button>
        )}
      </ul>
    </div>
  );
};

export default CandidateList;
