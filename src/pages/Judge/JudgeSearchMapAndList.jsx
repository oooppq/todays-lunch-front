/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import SearchResult from './SearchResult';
import { StyledMap } from './judge.style';

const JudgeSearchMapAndList = ({ keyword }) => {
  const [map, setMap] = useState();
  const [result, setResult] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!map || keyword.length === 0) return;
    const placeSearch = new window.kakao.maps.services.Places();
    // placeSearch.keywordSearch(keyword, (data, status, _pagination) => {
    placeSearch.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        const tempMarkers = [];
        for (let i = 0; i < data.length; i += 1) {
          tempMarkers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setResult(data);
        setMarkers(tempMarkers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [keyword, map]);
  return (
    <>
      <StyledMap
        center={{ lat: 37.5509442, lng: 126.9410023 }}
        level={5}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            // onClick={() => setInfo(marker)}
          />
        ))}
      </StyledMap>
      <SearchResult data={result} />
    </>
  );
};

export default React.memo(JudgeSearchMapAndList);
