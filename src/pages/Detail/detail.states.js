import { useState } from 'react';

export const useTabHandler = () => {
  const [tab, setTab] = useState('main');
  const changeTab = (toChange) => setTab(toChange);
  return { tab, changeTab };
};

export const useMenuModal = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openMenuModal = (menu) => {
    setIsMenu(true);
    setSelectedMenu(menu);
  };

  const closeMenuModal = () => {
    setIsMenu(false);
    setSelectedMenu(null);
  };

  const openPhotoDetailModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoDetailModal = () => {
    setSelectedPhoto(null);
  };
  return {
    isMenu,
    selectedMenu,
    selectedPhoto,
    openMenuModal,
    closeMenuModal,
    openPhotoDetailModal,
    closePhotoDetailModal,
  };
};

export const useUpdateMenuModal = () => {
  const [isUpdateMenu, setIsUpdateMenu] = useState(false);

  const openUpdateMenuModal = () => {
    setIsUpdateMenu(true);
  };
  const closeUpdateMenuModal = () => {
    setIsUpdateMenu(false);
  };

  return { isUpdateMenu, openUpdateMenuModal, closeUpdateMenuModal };
};

export const useUpdateSaleModal = () => {
  const [isUpdateSale, setIsUpdateSale] = useState(false);

  const openUpdateSaleModal = () => {
    setIsUpdateSale(true);
  };
  const closeUpdateSaleModal = () => {
    setIsUpdateSale(false);
  };

  return { isUpdateSale, openUpdateSaleModal, closeUpdateSaleModal };
};

export const useNewReviewModal = () => {
  const [isNewReview, setIsNewReview] = useState(false);

  const openNewReviewModal = () => {
    setIsNewReview(true);
  };
  const closeNewReviewModal = () => {
    setIsNewReview(false);
  };
  return { isNewReview, openNewReviewModal, closeNewReviewModal };
};

export const useNewMenuHandler = () => {
  const [isNewMenu, setIsNewMenu] = useState(false);

  const makeNewMenuForm = () => {
    setIsNewMenu(true);
  };

  return { isNewMenu, makeNewMenuForm };
};

export const useReviewContentHandler = () => {
  const [content, setContent] = useState(null);

  const changeContent = (newContent) => {
    setContent(newContent);
  };

  return { content, changeContent };
};

export const useReviewRatingHandler = () => {
  const [rating, setRating] = useState(0);

  const changeRating = (num) => {
    setRating(num);
  };

  return { rating, changeRating };
};

export const useWarningHandler = () => {
  const [isWarning, setIsWarning] = useState(false);
  const showWarningMessage = () => {
    setIsWarning(true);
  };

  return { isWarning, showWarningMessage };
};
