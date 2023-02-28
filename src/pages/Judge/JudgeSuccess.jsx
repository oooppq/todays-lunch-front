/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { JudgeSuccessContainer, JudgeSuccessInner } from './judge.style';
import xIcon from '../../assets/img/x-icon.svg';
import defaultIcon from '../../assets/img/default-icon.svg';
import { reset } from '../../redux/judgeNew';

const JudgeSuccess = ({ setIsDone }) => {
  const judgeNewStates = useSelector((state) => state.judgeNew);
  const fd = new FormData();
  Object.entries(judgeNewStates).forEach(([key, value]) => {
    if (value) {
      if (key === 'locationCategory')
        fd.append('locationCategoryName', value.name);
      else if (key === 'locationTag') fd.append('locationTagName', value.name);
      else if (key === 'foodCategory')
        fd.append('foodCategoryName', value.name);
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <JudgeSuccessContainer>
      <JudgeSuccessInner>
        <button
          type="button"
          className="xBtn"
          onClick={() => {
            setIsDone(false);
          }}
        >
          <img src={xIcon} alt="" />
        </button>
        <div className="content">
          {isLoading ? (
            <div>등록중입니다.</div>
          ) : (
            <div>
              맛집 추가가 성공적으로
              <br />
              완료되었습니다.
            </div>
          )}
          <img src={defaultIcon} alt="" />
          <div>감사합니다.</div>
        </div>
        {isLoading ? null : (
          <button
            type="button"
            className="doneBtn"
            onClick={() => {
              mutate(fd);
              dispatch(reset());
              navigate('../list');
            }}
          >
            다음
          </button>
        )}
      </JudgeSuccessInner>
    </JudgeSuccessContainer>
  );
};

export default JudgeSuccess;
