import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      color: #fff;
      background: rgba(0, 0, 0, 0.1);
      height: 44px;
      margin: 0 0 10px;
      padding: 0 15px;
      border: 0;
      border-radius: 4px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      align-self: flex-start;
      color: #fb6f91;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      color: #fff;
      background: #3b9eff;
      height: 44px;
      margin: 5px 0 0;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
