import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setSpecialCategory } from '../../../redux/judgeNew';
import { SpecialCategoryContainer, SpecialCategoryLi } from './judgeNew.style';

const JudgeNewSpecialCategory = () => {
  const { data, error, isLoading } = useQuery('special-category', () =>
    axios.get('/api/special-category').then((res) => res.data)
  );
  const dispatch = useDispatch();
  const specialCategory = useSelector(
    (state) => state.judgeNew.specialCategory
  );
  if (isLoading) return null;
  if (error) return 'error';
  return (
    <SpecialCategoryContainer>
      <div className="title">
        추천 카테고리 설정<span className="choice">(선택)</span>
      </div>
      <div className="sub">
        원하는 카테고리가 없을 경우 선택하지 않아도 됩니다.
      </div>
      {data.map((d) => (
        <SpecialCategoryLi
          color={d.color}
          key={`${d.name},${d.color}`}
          onClick={() => {
            let toDelete = -1;
            for (let i = 0; i < specialCategory.length; i += 1) {
              if (specialCategory[i] === d) {
                toDelete = i;
                break;
              }
            }
            if (toDelete >= 0) {
              dispatch(
                setSpecialCategory([
                  ...specialCategory.slice(0, toDelete),
                  ...specialCategory.slice(toDelete + 1),
                ])
              );
              return;
            }
            dispatch(setSpecialCategory([...specialCategory, d]));
          }}
          style={
            specialCategory.includes(d)
              ? { backgroundColor: '#6f6f6f', color: 'white' }
              : null
          }
        >
          <span style={specialCategory.includes(d) ? { color: 'white' } : null}>
            #
          </span>{' '}
          {d.name}
        </SpecialCategoryLi>
      ))}
    </SpecialCategoryContainer>
  );
};

export default JudgeNewSpecialCategory;
