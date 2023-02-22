/* eslint-disable react/prop-types */
import React from 'react';
import { Map as KakaoMap } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { MapContainer } from './restaurant.style';
import MapMarkerContainer from './MapMarkerContainer';

// 상위 컴포넌트에서 데이터를 넘겨받는다.
const Map = ({ restaurants }) => {
  return (
    <MapContainer>
      <KakaoMap
        center={useSelector((state) => state.restaurant.mapCenter)}
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
            />
          );
        })}
      </KakaoMap>
    </MapContainer>
  );
};

export default Map;
