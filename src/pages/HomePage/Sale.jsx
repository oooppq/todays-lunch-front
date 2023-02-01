/* eslint-disable react/prop-types */
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SaleContainer, SaleTitle, SaleUl, SaleLi } from './\bhomePage.style';
import defaultImage from '../../assets/img/default-image.png';
import { convertNum, gotoDetailOnClick } from '../../libs/utils';

const queryClient = new QueryClient();

const SetData = ({ navigate }) => {
  const { isLoading, error, data } = useQuery(['sales', 'list'], () =>
    axios.get('/api/sales').then((res) => res.data)
  );

  if (isLoading) return null;
  if (error) return 'error';

  return (
    <SaleContainer>
      <SaleTitle className="bold">할인 정보</SaleTitle>
      <SaleUl>
        {data.map((e) => (
          <SaleLi
            id={e.id}
            key={e.id}
            onClick={(event) => gotoDetailOnClick(event, navigate)}
          >
            <img src={defaultImage} alt="" />
            <div className="info">
              <div className="bold menu-name">{e.menu_name}</div>
              <div className="store-name">{e.restaurant_name}</div>
              <div className="original-price">
                {convertNum(e.original_price)}원
              </div>
              <div className="sale-price">{convertNum(e.sale_price)}원</div>
            </div>
          </SaleLi>
        ))}
      </SaleUl>
    </SaleContainer>
  );
};
const Sale = () => {
  const navigate = useNavigate();
  return (
    <QueryClientProvider client={queryClient}>
      <SetData navigate={navigate} />
    </QueryClientProvider>
  );
};

export default Sale;
