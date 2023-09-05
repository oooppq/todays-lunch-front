/* eslint-disable no-restricted-syntax */
import imageCompression from 'browser-image-compression';
import heic2any from 'heic2any';

// 숫자에 세 자리마다 콤마(,) 추가하기
export const convertNum = (num) => {
  if (num) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num;
};

export const gotoDetailOnClick = (id, navigate) => {
  navigate(`/restaurants/${id}`);
};

export const formatDate = (date) => {
  return `${`00${date.getMonth() + 1}`
    .toString()
    .slice(-2)}.${`00${date.getDate()}`.toString().slice(-2)}`;
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

// useInfiniteQuery의 결과물을 flatten하기 위한 function
export const flattenPages = (pages) => {
  if (!pages) return null;
  const output = [];
  for (const page of pages) {
    output.push(...page.data);
  }
  return output;
};

export const CompressImage = async (image) => {
  const temp = await heic2any({ blob: image, toType: 'image/jpeg' });
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(temp, options);
    return compressedFile;
  } catch (error) {
    return null;
  }
};
