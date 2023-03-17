import { useState } from 'react';

export const useTabHandler = () => {
  const [tab, setTab] = useState('main');
  const changeTab = (toChange) => setTab(toChange);
  return { tab, changeTab };
};

export const useMenuModal = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openMenuModal = (id) => {
    setIsMenu(true);
    setSelectedMenu(id);
  };

  const closeMenuModal = () => {
    setIsMenu(false);
    setSelectedMenu(null);
  };
  return { isMenu, selectedMenu, openMenuModal, closeMenuModal };
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
