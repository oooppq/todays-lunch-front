// 숫자에 세 자리마다 콤마(,) 추가하기
export const convertNum = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const gotoDetailOnClick = (id, navigate) => {
  navigate(`/restaurants/${id}`);
};

export const formatDate = (date) => {
  return `${`00${date.getMonth()}`.toString().slice(-2)}.${`00${date.getDate()}`
    .toString()
    .slice(-2)}`;
};

export const pushRecentSearch = (key, title, isLocation, data) => {
  if (title.length <= 0) return;
  let recentSearch = JSON.parse(localStorage.getItem(key)) || [];
  const newElem = {
    title,
    date: new Date(),
    isLocation,
  };
  if (data) newElem.place_data = data;
  recentSearch = [newElem, ...recentSearch];
  localStorage.setItem(key, JSON.stringify(recentSearch));
};

export const authStates = {
  INITIAL: 'initial',
  UNAUTHORIZED: 'unAuthorized',
  AUTHORIZED: 'authorized',
  EXPIRED: 'expired',
  PENDING: 'pending',
  INVALID: 'invalid',
  ERROR: 'error',
};
