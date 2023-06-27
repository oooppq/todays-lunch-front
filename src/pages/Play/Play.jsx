import React from 'react';
import { PlayContainer } from './play.style';
import { usePlay } from './play.helpers';
import rouletteImg2 from '../../assets/img/roulette2.png';
import rouletteImg6 from '../../assets/img/roulette6.png';
import deleteIcon from '../../assets/img/delete-icon.svg';
import selectPin from '../../assets/img/select-pin-icon.png';

const Play = () => {
  const { rouletteList, pushRoulette, clearRoulette } = usePlay();
  return (
    <PlayContainer>
      <div className="addedRestaurants">
        <div className="listTitle">
          음식점 목록
          <span className="listTitleSub">
            {' '}
            [최대 6개의 맛집을 담을 수 있어요]
          </span>
        </div>
        <ul className="restaurantsUl">
          {rouletteList.map((restaurant) => (
            <li key={restaurant.id} className="restaurantLi">
              <button type="button" className="restaurantName">
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
        </ul>
        <button type="button" className="moreRestaurantBtn">
          더 많은 맛집 채우러 가기 +
        </button>
      </div>
      {rouletteList.length < 2 ? (
        <div className="needMoreRestaurantOuter">
          <img src={rouletteImg6} alt="" className="rouletteImg" />
          <div className="blur">
            <div className="message">맛집을 더 담으러 가기</div>
          </div>
        </div>
      ) : (
        <div className="rouletteOuter">
          <div className="rouletteContainer">
            <img src={rouletteImg2} alt="" className="rouletteImg" />
            <ul className="rouletteUl">
              {rouletteList.map((restaurant) => (
                <li key={restaurant.id} className="rouletteLi">
                  {restaurant.restaurantName}
                </li>
              ))}
            </ul>
          </div>
          <img src={selectPin} alt="" className="selectPin" />
          <div className="btnsOuter">
            <button type="button" className="clearBtn" onClick={clearRoulette}>
              룰렛 초기화
            </button>
            <button type="button" className="startBtn">
              룰렛 돌리기
            </button>
          </div>
        </div>
      )}
    </PlayContainer>
  );
};

export default Play;
