/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { pushRecentSearch } from '../../../libs/utils';
import { StyledMap } from './judgeNew.style';

const JudgeSearchMap = ({ data, selected, setSelected }) => {
  const [map, setMap] = useState();
  useEffect(() => {
    if (map && data.length) {
      const bounds = new window.kakao.maps.LatLngBounds();
      for (let i = 0; i < data.length; i += 1) {
        bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
      }
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }
  }, [data, map]);

  useEffect(() => {
    if (map && selected) {
      const bounds = new window.kakao.maps.LatLngBounds();
      bounds.extend(new window.kakao.maps.LatLng(selected.y, selected.x));
      map.setBounds(bounds);
    }
  }, [map, selected]);

  return (
    <StyledMap
      center={{ lat: 37.5509442, lng: 126.9410023 }}
      level={5}
      onCreate={setMap}
    >
      {data.length
        ? data.map((d) => (
            <MapMarker
              key={`marker-${d.place_name}-${d.y},${d.x}`}
              position={{ lat: d.y, lng: d.x }}
              onClick={() => {
                setSelected(d);
                pushRecentSearch('recentSearch/judge', d.place_name, 1, d);
              }}
            />
          ))
        : null}
    </StyledMap>
  );
};

export default JudgeSearchMap;
