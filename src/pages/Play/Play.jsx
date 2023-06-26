import React from 'react';
import { PlayContainer } from './play.style';
import { usePlay } from './play.helpers';

const Play = () => {
  const { rouletteList, pushRoulette } = usePlay();
  return (
    <PlayContainer>
      <div className="">
        <img src="" alt="" className="rouletteIcon" />
        <div className="explanation">
          룰렛을 돌려 메뉴를 정한 후, 친구들과 공유해보세요.
        </div>
      </div>
      <div className="">
        <div className="">추가한 음식점 목록</div>
        <ul className="">
          {rouletteList.map((restaurant) => (
            <li key={restaurant.id} className="">
              <button
                type="button"
                className=""
                onClick={() => {
                  pushRoulette(restaurant);
                }}
              >
                {restaurant.restaurantName}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="rouletteContainer">
        <img src="" alt="" className="" />
      </div>
    </PlayContainer>
  );
};

export default Play;
