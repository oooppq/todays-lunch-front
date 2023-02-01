import styled from 'styled-components';
import { commonPageContainerStyle } from '../common.style';

export const LoginContainer = styled.div`
  margin: ${commonPageContainerStyle};
`;

export const LoginTitle = styled.h3``;

export const LoginElem = styled.div`
  text-align: center;
  form {
    width: 80%;
    margin: 0 auto;

    input {
      box-sizing: border-box;
      width: 100%;
      height: 30px;
    }
  }
`;
