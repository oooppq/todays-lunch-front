/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import cameraIcon from '../../assets/img/camera-icon.svg';
import xIcon from '../../assets/img/x-icon.svg';

const JudgeNewGetPhoto = ({ file, setFile }) => {
  const [img, setImg] = useState(null);
  const fileRef = useRef();

  return (
    <div className="photo">
      <div className="bodyTitle">사진</div>
      <button type="button" className="bodyBtn photoBtn">
        <button
          type="button"
          className="xBtn"
          onClick={(e) => {
            fileRef.current.value = null;
            setFile(null);
            setImg(null);
            e.stopPropagation();
          }}
        >
          <img src={xIcon} alt="" />
        </button>
        <label htmlFor="input-file">
          <img
            src={img || cameraIcon}
            alt=""
            className={img ? 'selected' : 'notSelected'}
          />
          <input
            ref={fileRef}
            id="input-file"
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files[0]);
              const reader = new FileReader();
              if (e.target.files && e.target.files.length) {
                reader.readAsDataURL(e.target.files[0]);
                reader.onloadend = () => {
                  if (reader.result) setImg(reader.result.toString());
                };
              }
            }}
          />
        </label>
        {img ? null : <div className="fileNum">{file ? file.length : 0}/1</div>}
      </button>
    </div>
  );
};

export default JudgeNewGetPhoto;
