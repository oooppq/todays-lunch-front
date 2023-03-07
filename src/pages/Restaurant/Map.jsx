/* eslint-disable react/prop-types */
import React from 'react';
import { Map as KakaoMap, MarkerClusterer } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer } from './restaurant.style';
import MapMarkerContainer from './MapMarkerContainer';
import { setSelectedMarker } from '../../redux/restaurant';

// 상위 컴포넌트에서 데이터를 넘겨받는다.
const Map = ({ restaurants }) => {
  const dispatch = useDispatch();

  return (
    <MapContainer>
      <div className="emptyDiv" />
      <KakaoMap
        center={useSelector((state) => state.restaurant.mapCenter)}
        isPanto
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px',
        }}
        level={useSelector((state) => state.restaurant.mapLevel)}
        onClick={() => {
          dispatch(setSelectedMarker(null));
        }}
      >
        <MarkerClusterer averageCenter minLevel={5}>
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
        </MarkerClusterer>
      </KakaoMap>
    </MapContainer>
  );
};

export default Map;
