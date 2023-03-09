/* eslint-disable react/prop-types */
import React from 'react';
import { useQueries } from 'react-query';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import { JudgeNowSlideContainer } from './judgeNow.style';
import JudgeNowDetail from './JudgeNowDetail';
import leftIcon from '../../../assets/img/judge-now-left-icon.svg';
import rightIcon from '../../../assets/img/judge-now-right-icon.svg';

const ArrowHandler = (clickHandler, hasMore, icon, direction) => (
  <div
    className={`arrowContainer ${direction}`}
    aria-hidden="true"
    onClick={clickHandler}
    style={hasMore ? { position: 'absolute' } : { display: 'none' }}
  >
    <img src={icon} alt="" className="arrowIcon" />
  </div>
);

const JudgeNowSlide = ({ restaurantData, mutate }) => {
  const recomRess = useQueries(
    restaurantData.map((e) => {
      return {
        queryKey: ['recommendation', e.id],
        queryFn: () => axios.get(`/api/restaurants/judges/${e.id}/agree`),
        enabled: !!restaurantData,
      };
    })
  );
  if (recomRess.some((res) => res.isLoading)) return null;

  return (
    <JudgeNowSlideContainer>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) =>
          ArrowHandler(clickHandler, hasPrev, leftIcon, 'left')
        }
        renderArrowNext={(clickHandler, hasNext) =>
          ArrowHandler(clickHandler, hasNext, rightIcon, 'right')
        }
      >
        {restaurantData.map((e, i) => (
          <JudgeNowDetail
            key={`${e.id},${e.restaurantName}`}
            detail={e}
            mutate={mutate}
            recomFlag={recomRess[i].data.data}
          />
        ))}
      </Carousel>
    </JudgeNowSlideContainer>
  );
};

export default JudgeNowSlide;
