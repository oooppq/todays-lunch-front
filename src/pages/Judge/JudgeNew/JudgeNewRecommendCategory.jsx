import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setRecommendCategory } from '../../../redux/judgeNew';
import {
  RecommendCategoryContainer,
  RecommendCategoryLi,
} from './judgeNew.style';

const JudgeNewRecommendCategory = () => {
  const { data, error, isLoading } = useQuery(
    'recommend-category',
    () =>
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/recommend-tag`)
        .then((res) => res.data),
    { refetchOnWindowFocus: false }
  );
  const dispatch = useDispatch();
  const recommendCategory = useSelector(
    (state) => state.judgeNew.recommendCategory
  );
  if (isLoading) return null;
  if (error) return 'error';

  return (
    <RecommendCategoryContainer>
      <div className="title">
        추천 카테고리 설정<span className="choice">(선택)</span>
      </div>
      <div className="sub">
        원하는 카테고리가 없을 경우 선택하지 않아도 됩니다.
      </div>
      {data.map((d) => (
        <RecommendCategoryLi
          color={d.color}
          key={`${d.name},${d.color}`}
          onClick={() => {
            let toDelete = -1;
            for (let i = 0; i < recommendCategory.length; i += 1) {
              if (recommendCategory[i] === d) {
                toDelete = i;
                break;
              }
            }
            if (toDelete >= 0) {
              dispatch(
                setRecommendCategory([
                  ...recommendCategory.slice(0, toDelete),
                  ...recommendCategory.slice(toDelete + 1),
                ])
              );
              return;
            }
            dispatch(setRecommendCategory([...recommendCategory, d]));
          }}
          style={
            recommendCategory.includes(d)
              ? { backgroundColor: '#6f6f6f', color: 'white' }
              : null
          }
        >
          <span
            style={recommendCategory.includes(d) ? { color: 'white' } : null}
          >
            #
          </span>{' '}
          {d.name}
        </RecommendCategoryLi>
      ))}
    </RecommendCategoryContainer>
  );
};

export default JudgeNewRecommendCategory;
