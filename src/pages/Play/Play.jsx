import React from 'react';
import { PlayContainer } from './play.style';
import { usePlay } from './play.helpers';
import rouletteImg6 from '../../assets/img/roulette6.png';

import selectPin from '../../assets/img/select-pin-icon.png';
import SelectedModal from './SelectedModal';
import CandidateList from './CandidateList';

const Play = () => {
  const {
    rouletteList,
    rouletteRef,
    rouletteImg,
    rotate,
    pushRoulette,
    clearRoulette,
    goToDetail,
    isSelected,
    closeSelectedModal,
    selectedRestaurant,
  } = usePlay();

  return (
    <PlayContainer>
      {isSelected && (
        <SelectedModal
          closeSelectedModal={closeSelectedModal}
          selectedRestaurant={selectedRestaurant}
          goToDetail={goToDetail}
        />
      )}
      <CandidateList
        rouletteList={rouletteList}
        pushRoulette={pushRoulette}
        goToDetail={goToDetail}
      />
      {rouletteList.length < 2 ? (
        <div className="needMoreRestaurantOuter">
          <img src={rouletteImg6} alt="" className="rouletteImg" />
          <div className="blur">
            <div className="message">맛집을 더 담으러 가기</div>
          </div>
        </div>
      ) : (
        <div className="rouletteOuter">
          <div ref={rouletteRef} className="rouletteContainer">
            <img src={rouletteImg} alt="" className="rouletteImg" />
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
            <button type="button" className="startBtn" onClick={rotate}>
              룰렛 돌리기
            </button>
          </div>
        </div>
      )}
    </PlayContainer>
  );
};

export default Play;
