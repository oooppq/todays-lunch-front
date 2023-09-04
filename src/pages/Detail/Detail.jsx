import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailContainer } from './detail.style';
import DetailTop from './DetailTop';
import DetailMain from './DetailMain';
import DetailReview from './DetailReview';
import { useDetail, useDetailNav } from './detail.helpers';
import DetailMenuFetchModal from './DetailMenuFetchModal';
import Loading from '../../components/Loading';

const Detail = () => {
  const { id } = useParams();
  const { tab, changeTab } = useDetailNav();

  const {
    isNewMenuModalOpen,
    setIsNewMenuModalOpen,
    restaurant,
    // isRestaurantLoading,
    // restaurantError,
    restaurantStatus,
    menus,
    // isMenusLoading,
    // menusError,
    pushNewMenu,
    pushNewMenuStatus,
    useMenuElem,
    openNewMenuModal,
  } = useDetail(id);

  if (restaurantStatus !== 'success') return null;

  return (
    <DetailContainer>
      {pushNewMenuStatus === 'loading' ? <Loading /> : null}
      {isNewMenuModalOpen && (
        <DetailMenuFetchModal
          closeMenuFetchModal={() => {
            setIsNewMenuModalOpen(false);
          }}
          fetchMenu={pushNewMenu}
        />
      )}
      <DetailTop restaurant={restaurant} tab={tab} changeTab={changeTab} />
      {tab === 'main' ? (
        <DetailMain
          restaurant={restaurant}
          menuData={menus}
          openNewMenuModal={openNewMenuModal}
          useMenuElem={useMenuElem}
        />
      ) : (
        <DetailReview restaurantId={id} reviewNumber={restaurant.reviewCount} />
      )}
    </DetailContainer>
  );
};

export default Detail;
