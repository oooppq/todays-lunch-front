// 숫자에 세 자리마다 콤마(,) 추가하기
export const convertNum = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const gotoDetailOnClick = (id, navigate) => {
  navigate(`/restaurants/${id}`);
};
