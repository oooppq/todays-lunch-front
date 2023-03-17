import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailContainer } from './detail.style';
import DetailTop from './DetailTop';
import DetailMain from './DetailMain';
import DetailReview from './DetailReview';
import { useDetailPageData } from './detail.helpers';
import { useTabHandler } from './detail.states';

const Detail = () => {
  const { id } = useParams();
  const { tab, changeTab } = useTabHandler();

  const ress = useDetailPageData(id);

  if (ress.some((res) => res.isLoading || res.isError)) return null;

  return (
    <DetailContainer>
      <DetailTop
        restaurantData={ress[0].data}
        tab={tab}
        changeTab={changeTab}
      />
      {(() => {
        switch (tab) {
          case 'main':
            return (
              <DetailMain
                restaurantData={ress[0].data}
                menuData={ress[1].data}
              />
            );
          case 'review':
            return <DetailReview restaurantId={id} />;
          default:
            return <DetailMain />;
        }
      })()}
    </DetailContainer>
  );
};

export default Detail;
