import React from 'react';
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

const JudgeNowSlide = () => {
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
        <JudgeNowDetail />
        <JudgeNowDetail />
        <JudgeNowDetail />
      </Carousel>
    </JudgeNowSlideContainer>
  );
};

export default JudgeNowSlide;
