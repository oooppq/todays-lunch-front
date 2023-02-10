import React from 'react';
import { Map as KakaoMap } from 'react-kakao-maps-sdk';
import { MapContainer } from './restaurant.style';

const { kakao } = window;

const Map = () => {
  const ps = new kakao.maps.services.Places();
  ps.keywordSearch();
  return (
    <MapContainer>
      <KakaoMap
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px',
        }}
        level={3}
      />
    </MapContainer>
  );
};

export default Map;
