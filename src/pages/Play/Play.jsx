import React, { useEffect, useRef } from 'react';
import { PlayContainer } from './play.style';
import { usePlay } from './play.helpers';
import rouletteImg2 from '../../assets/img/roulette5.png';
import rouletteImg6 from '../../assets/img/roulette6.png';
import deleteIcon from '../../assets/img/delete-icon.svg';
import selectPin from '../../assets/img/select-pin-icon.png';

const temp = [
  {
    id: 1,
    restaurantName: '가츠벤또',
    imageUrl: '',
    latitude: 37.5533674,
    longitude: 126.937563,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '일식',
    rating: 4.7,
    reviewCount: 343,
  },
  {
    id: 2,
    restaurantName: '마포돼지불백',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    review_number: 4723,
  },
  {
    id: 3,
    restaurantName: '마포돼지불백',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    review_number: 4723,
  },
  {
    id: 4,
    restaurantName: '마포돼지불백',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    review_number: 4723,
  },
  {
    id: 5,
    restaurantName: '마포돼지불백',
    imageUrl: '',
    latitude: 37.5514818,
    longitude: 126.9373166,
    locationCategory: '서강대학교',
    locationTag: '정문',
    foodCategory: '한식',
    rating: 4.9,
    review_number: 4723,
  },
];
const Play = () => {
  const { rouletteList, pushRoulette, clearRoulette } = usePlay();
  const rouletteRef = useRef();

  const rotate = () => {
    const roulette = rouletteRef.current;
    roulette.style.transform = `initial`;
    roulette.style.transition = `initial`;

    setTimeout(() => {
      const rand = Math.floor(Math.random() * 360);

      const angle = rand + 360 * 10; // 10바퀴 돌리기

      roulette.style.transform = `rotate(${angle}deg)`;
      roulette.style.transition = `4s`;
    });
  };

  useEffect(() => {
    const lis = rouletteRef.current.lastChild.children;
    const len = lis.length;

    const circle = Math.PI * 2;
    for (let i = 0; i < lis.length; i += 1) {
      lis[i].style = `bottom: ${
        182 + Math.sin((circle / len) * i + circle / len / 2) * 110
      }px;
      left: ${182 + Math.cos((circle / len) * i + circle / len / 2) * 110}px;
      transform: translate(-50%,20%)`;
    }
  });
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
      {rouletteList.length < 1 ? (
        <div className="needMoreRestaurantOuter">
          <img src={rouletteImg6} alt="" className="rouletteImg" />
          <div className="blur">
            <div className="message">맛집을 더 담으러 가기</div>
          </div>
        </div>
      ) : (
        <div className="rouletteOuter">
          <div ref={rouletteRef} className="rouletteContainer">
            <img src={rouletteImg2} alt="" className="rouletteImg" />
            <ul className="rouletteUl">
              {temp.map((restaurant) => (
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
            <button
              type="button"
              className="startBtn"
              onClick={() => {
                // console.log(rouletteRef.current.style.transform);
                rotate();
              }}
            >
              룰렛 돌리기
            </button>
          </div>
        </div>
      )}
    </PlayContainer>
  );
};

export default Play;
