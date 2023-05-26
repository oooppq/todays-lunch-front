import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailContainer } from './detail.style';
import DetailTop from './DetailTop';
import DetailMain from './DetailMain';
import DetailReview from './DetailReview';
import { useDetail, useDetailNav } from './detail.helpers';
import DetailMenuUpdateModal from './DetailMenuUpdateModal';
import DetailMenuPhotoModal from './DetailMenuPhotoModal';
import DetailMenuSaleInfoModal from './DetailMenuSaleInfoModal';

const Detail = () => {
  const { id } = useParams();
  const { tab, changeTab } = useDetailNav();

  const {
    isMenuPhotoModalOpen,
    setIsMenuPhotoModalOpen,
    isMenuUpdateModalOpen,
    setIsMenuUpdateModalOpen,
    isMenuSaleInfoModalOpen,
    setIsMenuSaleInfoModalOpen,
    selectedMenu,
    setSelectedMenu,
    restaurant,
    isRestaurantLoading,
    restaurantError,
    menus,
    isMenusLoading,
    menusError,
  } = useDetail(id);

  if (isRestaurantLoading || restaurantError || isMenusLoading || menusError)
    return null;

  return (
    <DetailContainer>
      {isMenuPhotoModalOpen && (
        <DetailMenuPhotoModal
          closeMenuPhotoModal={() => {
            setIsMenuPhotoModalOpen(false);
            setSelectedMenu(null);
          }}
          menu={selectedMenu}
        />
      )}
      {isMenuUpdateModalOpen && (
        <DetailMenuUpdateModal
          closeMenuUpdateModal={() => {
            setIsMenuUpdateModalOpen(false);
            setSelectedMenu(null);
          }}
          menu={selectedMenu}
        />
      )}
      {isMenuSaleInfoModalOpen && selectedMenu.saleComment && (
        <DetailMenuSaleInfoModal
          saleComment={selectedMenu.saleComment}
          closeMenuSaleInfoModal={() => {
            setIsMenuSaleInfoModalOpen(false);
          }}
        />
      )}
      <DetailTop restaurant={restaurant} tab={tab} changeTab={changeTab} />
      {tab === 'main' ? (
        <DetailMain
          restaurant={restaurant}
          menuData={menus}
          openMenuPhotoModal={(menu) => {
            setIsMenuPhotoModalOpen(true);
            setSelectedMenu(menu);
          }}
          openMenuUpdateModal={(menu) => {
            setIsMenuUpdateModalOpen(true);
            setSelectedMenu(menu);
          }}
          openMenuSaleInfoModal={(menu) => {
            setIsMenuSaleInfoModalOpen(true);
            setSelectedMenu(menu);
          }}
        />
      ) : (
        <DetailReview restaurantId={id} />
      )}
    </DetailContainer>
  );
};

export default Detail;
