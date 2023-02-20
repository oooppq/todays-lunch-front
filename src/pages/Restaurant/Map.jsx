/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import {
  CustomOverlayMap,
  Map as KakaoMap,
  MapMarker,
} from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gotoDetailOnClick } from '../../libs/utils';
import { MapContainer, CustomOverlayElem } from './restaurant.style';

// 마커와 커스텀 오버레이(마커와 함께 표시되는 정보)를 다루기 위해 따로 컴포넌트를 만들었다.
const MapMarkerContainer = ({
  index,
  position,
  content,
  isSelected,
  onClick,
}) => {
  const markerRef = useRef(); // 마커 이외의 부분 클릭할 때 상호명 사라지도록 useRef을 통해 마커 컴포넌트 변수화
  const [isVisible, setIsVisible] = useState(); // 상호명 나오도록
  const handleClickOutside = ({ target }) => {
    /* markerRef.current를 하면 object가 반환되어 markerRef.current.contains(target)과 같은 방식으로
     클릭된 것이 마커인지 마커 이외의 부분인지 판단할 수 없음.
     current.Ec가 정확히 뭔진 모르겠는데 일단 이렇게 해서 비교하도록 함. */
    if (markerRef.current && target !== markerRef.current.Ec)
      setIsVisible(false); // 마커 이외의 부분 클릭시 false
    else setIsVisible(true);
  };

  useEffect(() => {
    // 아래의 조건문을 useEffect 안에서 관리하지 않으면 에러 발생
    if (isSelected) setIsVisible(true);
    else setIsVisible(false);

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isSelected]);

  const navigate = useNavigate();
  return (
    <>
      <MapMarker ref={markerRef} position={position} onClick={onClick} />
      {isVisible ? (
        <CustomOverlayMap position={position} style={{ position: 'relative' }}>
          <CustomOverlayElem onClick={() => gotoDetailOnClick(index, navigate)}>
            {content}
            {' >'}
          </CustomOverlayElem>
        </CustomOverlayMap>
      ) : null}
    </>
  );
};

// 상위 컴포넌트에서 데이터를 넘겨받는다.
const Map = ({ restaurants }) => {
  const [selectedMarker, setSelectedMarker] = useState(); // 선택된 마커를 상태로 관리한다.
  return (
    <MapContainer>
      <KakaoMap
        center={{
          // 현재 설정된 위치를 기반으로 지도의 중심점을 설정
          lat: useSelector((state) => state.restaurant.selectedLocTag.latitude),
          lng: useSelector(
            (state) => state.restaurant.selectedLocTag.longitude
          ),
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px',
        }}
        level={
          // 세부 위치가 설정됐을 때 지도의 level에 변화를 줌
          useSelector((state) => state.restaurant.selectedLocTag.id) === 1
            ? 5
            : 4
        }
      >
        {restaurants.map((e) => {
          const position = { lat: e.latitude, lng: e.longitude };
          return (
            <MapMarkerContainer
              key={e.id}
              index={e.id}
              position={position}
              content={e.restaurant_name}
              isSelected={selectedMarker === e.id} // 해당하는 마커가 선택된 마커인지 나타내는 bool
              onClick={() => setSelectedMarker(e.id)} // 클릭하면 selectedMarker을 클릭된 마커로 바꿔주는 onclick
            />
          );
        })}
      </KakaoMap>
    </MapContainer>
  );
};

export default Map;
