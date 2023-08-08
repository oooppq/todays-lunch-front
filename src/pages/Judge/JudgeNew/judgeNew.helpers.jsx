/* eslint-disable import/prefer-default-export */
const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

export const distance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // 지구 반지름 (단위: km)
  const dLat = deg2rad(Math.abs(lat2 - lat1));
  const dlng = deg2rad(Math.abs(lng2 - lng1));
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dlng / 2) *
      Math.sin(dlng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const dist = R * c; // 두 지점 간의 거리 (단위: km)
  return dist;
};
