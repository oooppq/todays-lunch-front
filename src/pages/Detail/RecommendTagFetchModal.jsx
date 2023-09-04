/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { RecomTagModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import RecommendTagElement from './RecommendTagElement';
import Loading from '../../components/Loading';

const RecommendTagFetchModal = ({ closeModal, restId, recommendTag }) => {
  const SERVER_URL = import.meta.env.VITE_API_BASE_URL;
  const [tags, setTags] = useState([]);
  const recommendTagIds = recommendTag.map((tag) => tag.id);
  const accessToken = useSelector((state) => state.userAuth.accessToken);
  const queryClient = useQueryClient();

  const { data: recommendTags } = useQuery(
    'recommend-category',
    () =>
      axios.get(`${SERVER_URL}/recommend-category`).then((res) => {
        for (const tag of res.data) {
          if (recommendTagIds.includes(tag.id)) {
            setTags((state) => [...state, tag.id]);
          }
        }
        return res.data;
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutate: updateRecommendTag, status } = useMutation(
    ['update', 'recommend-tag'],
    () =>
      axios.patch(
        `${SERVER_URL}/restaurants/${restId}/recommend-category`,
        {
          recommendCategoryIds: tags,
        },
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['restaurant', String(restId)]);
      },
    }
  );

  useEffect(() => {
    if (status === 'success') closeModal();
  }, [closeModal, status]);

  return (
    <RecomTagModalContainer>
      {status === 'loading' && <Loading />}
      <div className="modalInner">
        <div className="title">추천 태그</div>
        <div className="subTitle">태그를 클릭하여 추가/삭제 해주세요.</div>
        <button className="closeBtn" type="button" onClick={closeModal}>
          <img src={xIcon} alt="" />
        </button>
        <ul className="tagsUl">
          {recommendTags &&
            recommendTags.map((tag) => (
              <RecommendTagElement
                key={tag.id}
                tag={tag}
                isSelected={tags.includes(tag.id)}
                setTags={setTags}
              />
            ))}
        </ul>
        <button type="button" className="okBtn" onClick={updateRecommendTag}>
          확인
        </button>
      </div>
    </RecomTagModalContainer>
  );
};

export default RecommendTagFetchModal;
