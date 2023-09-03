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
  // console.log(reader);
  const [isYes, setIsYes] = useState(false);
  const judgeNewStates = useSelector((state) => state.judgeNew);
  const accessToken = useSelector((state) => state.userAuth.accessToken);
  const fd = new FormData();
  const createDto = {
    restaurantName: judgeNewStates.restaurantName,
    address: judgeNewStates.address,
    recommendCategoryIds: judgeNewStates.recommendCategory.map((cat) => cat.id),
    longitude: judgeNewStates.longitude,
    latitude: judgeNewStates.latitude,
    introduction: judgeNewStates.introduction,
    foodCategoryName: judgeNewStates.foodCategory.name,
  };
  fd.append('restaurantImage', judgeNewStates.restaurantImage);
  fd.append('createDto', JSON.stringify(createDto));
  // Object.entries(judgeNewStates).forEach(([key, value]) => {
  //   if (value) {
  //     //   fd.append('locationCategoryName', value.name);
  //     // else if (key === 'locationTag') fd.append('locationTagName', value.name);
  //     if (key === 'locationCategory') return;
  //     if (key === 'foodCategory') fd.append('foodCategoryName', value.name);
  //     // else if (key === 'restaurantImage') fd.append(reader.result.toString());
  //     else if (key === 'recommendCategory') {
  //       if (value.length) {
  //         fd.append(
  //           'recommendCategoryIds',
  //           value.map((cat) => cat.id)
  //         );
  //       } else fd.append('recommendCategoryIds', null);
  //     } else fd.append(key, value);
  //   } else fd.append(key, null);
  // });

  const { mutate, isLoading } = useMutation((toSend) =>
    axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/restaurants/judges`,
      toSend,
      {
        headers: {
          'Content-Type': `multipart/form-data; `,
          Authorization: `${accessToken}`,
        },
      }
    )
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
              <div className="comment">작성을 완료하셨나요?</div>
              <div className="btns">
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
            </div>
          </>
        )}
      </JudgeNewDoneModalInner>
    </JudgeNewDoneModalContainer>
  );
};

export default JudgeNewDoneModal;
