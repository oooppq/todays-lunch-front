import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRoulette } from '../../libs/common.helpers';
import rouletteImg2 from '../../assets/img/roulette2.png';
import rouletteImg3 from '../../assets/img/roulette3.png';
import rouletteImg4 from '../../assets/img/roulette4.png';
import rouletteImg5 from '../../assets/img/roulette5.png';
import rouletteImg6 from '../../assets/img/roulette6.png';

export const usePlay = () => {
  const { rouletteList, pushRoulette, clearRoulette } = useRoulette();
  const rouletteRef = useRef();
  const [rouletteImg, setRouletteImg] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const navigate = useNavigate();

  const rotate = () => {
    setIsSpinning(true);

    if (!isSpinning) {
      const roulette = rouletteRef.current;
      roulette.style.transform = `initial`;
      roulette.style.transition = `initial`;
      setTimeout(() => {
        const rand = Math.floor(Math.random() * 360);
        setSelectedRestaurant(
          rouletteList[
            Math.floor(((rand + 90) % 360) / (360 / rouletteList.length))
          ]
        );

        const angle = rand + 360 * 10; // 10바퀴 돌리기

        roulette.style.transform = `rotate(${angle}deg)`;
        roulette.style.transition = `4s`;
      });

      setTimeout(() => {
        setIsSelected(true);
        setIsSpinning(false);
      }, 4500);
    }
  };

  const closeSelectedModal = () => {
    setIsSelected(false);
    setSelectedRestaurant(null);
  };

  const goToDetail = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const goToRestaurants = () => {
    navigate('/restaurants');
  };
  useEffect(() => {
    const len = rouletteList.length;

    switch (len) {
      case 2:
        setRouletteImg(rouletteImg2);
        break;
      case 3:
        setRouletteImg(rouletteImg3);
        break;
      case 4:
        setRouletteImg(rouletteImg4);
        break;
      case 5:
        setRouletteImg(rouletteImg5);
        break;
      case 6:
        setRouletteImg(rouletteImg6);
        break;
      default:
    }
  }, [rouletteList.length]);

  useEffect(() => {
    if (rouletteRef.current) {
      const lis = rouletteRef.current.lastChild.children;
      const len = lis.length;
      const r = rouletteRef.current.clientWidth / 2;

      const circle = Math.PI * 2;
      for (let i = 0; i < lis.length; i += 1) {
        lis[i].style = `bottom: ${
          r + Math.sin((circle / len) * i + circle / len / 2) * (r * 0.6)
        }px;
      left: ${
        r + Math.cos((circle / len) * i + circle / len / 2) * (r * 0.6)
      }px;
      transform: translate(-50%,20%)`;
      }
    }
  });

  return {
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
  };
};

export const useFullController = (rouletteList, pushRoulette) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isFullError, setIsFullError] = useState(
    location.state && location.state.fullFlag
  );
  const [toAdd, setToAdd] = useState(location.state && location.state.toAdd);
  const [addFlag, setAddFlag] = useState(false);

  const addHandler = () => {
    if (toAdd) {
      pushRoulette(toAdd);
      setAddFlag(false);
      setToAdd(null);
    }
  };

  useEffect(() => {
    if (location.state) navigate('/play', { state: null });
    if (isFullError) {
      if (rouletteList.length < 6) {
        setIsFullError(false);
        setAddFlag(true);
      }
    }
  }, [rouletteList.length, location, navigate, isFullError]);

  return { toAdd, isFullError, addFlag, addHandler };
};
