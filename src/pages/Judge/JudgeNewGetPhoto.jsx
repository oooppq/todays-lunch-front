/* eslint-disable react/prop-types */
import React from 'react';
import cameraIcon from '../../assets/img/camera-icon.svg';

const JudgeNewGetPhoto = ({ file, setFile }) => {
  return (
    <div className="photo">
      <div className="bodyTitle">사진</div>
      <button type="button" className="bodyBtn photoBtn">
        <label htmlFor="input-file">
          <img src={cameraIcon} alt="" />
          <input
            id="input-file"
            type="file"
            multiple="multiple"
            onChange={(e) => {
              setFile(e.target.files);
            }}
          />
        </label>
        <div className="fileNum">{file.length}/10</div>
      </button>
    </div>
  );
};

export default JudgeNewGetPhoto;
