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
    isRestaurantLoading,
    restaurantError,
    menus,
    isMenusLoading,
    menusError,
    pushNewMenu,
    pushNewMenuStatus,
    useMenuElem,
  } = useDetail(id);

  if (isRestaurantLoading || restaurantError || isMenusLoading || menusError)
    return null;

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
          openNewMenuModal={() => {
            setIsNewMenuModalOpen(true);
          }}
          useMenuElem={useMenuElem}
        />
      ) : (
        <DetailReview restaurantId={id} />
      )}
    </DetailContainer>
  );
};

export default Detail;
