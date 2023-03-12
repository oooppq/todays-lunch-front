/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  JudgeNewDoneModalContainer,
  JudgeNewDoneModalInner,
} from './judgeNew.style';
import JudgeNewDoneSuccess from './JudgeNewDoneSuccess';
import { reset } from '../../../redux/judgeNew';
import xIcon from '../../../assets/img/x-icon.svg';

const JudgeNewDoneModal = ({ setIsDone }) => {
  const [isYes, setIsYes] = useState(false);
  const judgeNewStates = useSelector((state) => state.judgeNew);
  const fd = new FormData();
  Object.entries(judgeNewStates).forEach(([key, value]) => {
    if (value) {
      if (key === 'locationCategory')
        fd.append('locationCategoryName', value.name);
      else if (key === 'locationTag') fd.append('locationTagName', value.name);
      else if (key === 'foodCategory')
        fd.append('foodCategoryName', value.name);
      else if (key === 'recommendCategory' && value.length)
        fd.append('ecommendCategory', value);
      else fd.append(key, value);
    }
  });

  const { mutate, isLoading } = useMutation((toSend) =>
    axios.post('/api/restaurants', toSend, {
      headers: {
        'Content-Type': `multipart/form-data; `,
      },
    })
  );
  const dispatch = useDispatch();

  return (
    <JudgeNewDoneModalContainer>
      <JudgeNewDoneModalInner>
        {isYes ? (
          <JudgeNewDoneSuccess isLoading={isLoading} />
        ) : (
          <>
            <button
              type="button"
              className="xBtn"
              onClick={() => {
                dispatch(reset());
                setIsDone(false);
              }}
            >
              <img src={xIcon} alt="" />
            </button>
            <div className="confirmDiv">
              <div>
                맛집 등록하기
                <br />
                작성을 완료하셨나요?
              </div>
              <button
                type="button"
                className="yesNoBtn"
                onClick={() => {
                  mutate(fd);
                  dispatch(reset());
                  setIsYes(true);
                }}
              >
                네
              </button>
              <button
                type="button"
                className="yesNoBtn"
                onClick={() => {
                  setIsDone(false);
                }}
              >
                아니요
              </button>
            </div>
          </>
        )}
      </JudgeNewDoneModalInner>
    </JudgeNewDoneModalContainer>
  );
};

export default JudgeNewDoneModal;
