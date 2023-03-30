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
    handleEmailChange,
    handleNickNameChange,
    handlePasswordChange,
    handlePasswordConfirmChange,
    checkPassword,
    addLocation,
    changeLocations,
    addFood,
    changeFoods,
    goToNextStage,
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
                nickName={nickName}
                password={password}
                passwordConfirm={passwordConfirm}
                handleEmailChange={handleEmailChange}
                handleNickNameChange={handleNickNameChange}
                handlePasswordChange={handlePasswordChange}
                handlePasswordConfirmChange={handlePasswordConfirmChange}
                checkPassword={checkPassword}
                goToNextStage={goToNextStage}
              />
            );
          case 2:
            return (
              <JoinBodySecond
                locations={locations}
                foods={foods}
                addLocation={addLocation}
                changeLocations={changeLocations}
                addFood={addFood}
                changeFoods={changeFoods}
                goToNextStage={goToNextStage}
              />
            );
          case 3:
            return (
              <JoinSuccess
                email={email}
                nickName={nickName}
                password={password}
                passwordConfirm={passwordConfirm}
                locations={locations}
                foods={foods}
              />
            );
          default:
            return null;
        }
      })()}
    </JoinContainer>
  );
};

export default Join;
