/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

const RecommendTagElement = ({ tag, isSelected, setTags }) => {
  //   console.log(tag, isSelected);
  return (
    <li
      key={tag.id}
      className="tagLi"
      style={{ background: isSelected ? 'grey' : null }}
      onClick={() => {
        setTags((tags) => {
          const newTags = tags.filter((id) => id !== tag.id);
          if (newTags.length === tags.length) return [...tags, tag.id];
          return newTags;
        });
      }}
    >
      <span
        className="hash"
        style={{ color: isSelected ? 'white' : tag.color }}
      >
        #
      </span>{' '}
      <span className="" style={{ color: isSelected ? 'white' : null }}>
        {tag.name}
      </span>
    </li>
  );
};

export default RecommendTagElement;
