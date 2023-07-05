import React from 'react';
import { PlayContainer } from './play.style';
import { useFullController, usePlay } from './play.helpers';
import selectPin from '../../assets/img/select-pin-icon.png';
import SelectedModal from './SelectedModal';
import CandidateList from './CandidateList';
import RouletteFull from './RouletteFull';
import NeedMore from './NeedMore';

const Play = () => {
  const {
    rouletteList,
    rouletteRef,
    rouletteImg,
    rotate,
    pushRoulette,
    clearRoulette,
    goToDetail,
    goToRestaurants,
    isSelected,
    closeSelectedModal,
    selectedRestaurant,
  } = usePlay();

  const { toAdd, isFullError, addFlag, addHandler } = useFullController(
    rouletteList,
    pushRoulette
  );

  return (
    <PlayContainer>
      {isSelected && (
        <SelectedModal
          closeSelectedModal={closeSelectedModal}
          selectedRestaurant={selectedRestaurant}
          goToDetail={goToDetail}
        />
      )}
      <RouletteFull
        isFullError={isFullError}
        addFlag={addFlag}
        toAdd={toAdd}
        addHandler={addHandler}
      />
      <div
        className="playMain"
        style={{ marginTop: isFullError || addFlag ? '10px' : '20px' }}
      >
        {rouletteList.length < 2 ? (
          <NeedMore goToRestaurants={goToRestaurants} />
        ) : (
          <>
            <CandidateList
              rouletteList={rouletteList}
              pushRoulette={pushRoulette}
              goToDetail={goToDetail}
              goToRestaurants={goToRestaurants}
            />
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
                <button
                  type="button"
                  className="clearBtn"
                  onClick={clearRoulette}
                >
                  룰렛 초기화
                </button>
                <button type="button" className="startBtn" onClick={rotate}>
                  룰렛 돌리기
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </PlayContainer>
  );
};

export default Play;
