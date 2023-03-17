/* eslint-disable react/prop-types */
import React from 'react';

const DetailMenuModal = ({ closeMenuModal, id }) => {
  return (
    <div className="check!">
      {id}
      <button
        type="button"
        onClick={() => {
          closeMenuModal();
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default DetailMenuModal;
