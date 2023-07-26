import React from 'react';
import UserPageHeader from '../../components/UserPageHeader';
import { JoinContainer } from './join.style';
import jmcIcon from '../../assets/img/user-jmc-icon.svg';
import JoinBodyFirst from './JoinBodyFirst';
import JoinBodySecond from './JoinBodySecond';
import JoinSuccess from './JoinSuccess';
import { useJoinHandler } from './join.helpers';

const Join = () => {
  const {
    email,
    nickName,
    password,
    passwordConfirm,
    locations,
    foods,
    stage,
    status,
    error,
    handleEmailChange,
    handleNickNameChange,
    handlePasswordChange,
    handlePasswordConfirmChange,
    setLocations,
    setFoods,
    addCategory,
    deleteCategory,
    goToNextStage,
    postJoinRequest,
    emailValidationRequest,
    varificationCode,
    reset,
  } = useJoinHandler();

  return (
    <JoinContainer>
      <UserPageHeader />
      <div className="joinLogoAndTitle">
        <img src={jmcIcon} alt="" className="joinLogo" />
        <div className="joinTitle">회원가입</div>
      </div>
      {(() => {
        switch (stage) {
          case 1:
            return (
              <JoinBodyFirst
                email={email}
                emailValidationRequest={emailValidationRequest}
                varificationCode={varificationCode}
                codeReset={reset}
                nickName={nickName}
                password={password}
                passwordConfirm={passwordConfirm}
                handleEmailChange={handleEmailChange}
                handleNickNameChange={handleNickNameChange}
                handlePasswordChange={handlePasswordChange}
                handlePasswordConfirmChange={handlePasswordConfirmChange}
                goToNextStage={goToNextStage}
              />
            );
          case 2:
            return (
              <JoinBodySecond
                locations={locations}
                foods={foods}
                setLocations={setLocations}
                setFoods={setFoods}
                addCategory={addCategory}
                deleteCategory={deleteCategory}
                goToNextStage={goToNextStage}
                postJoinRequest={postJoinRequest}
              />
            );
          case 3:
            return (
              <JoinSuccess nickName={nickName} status={status} error={error} />
            );
          default:
            return null;
        }
      })()}
    </JoinContainer>
  );
};

export default Join;
