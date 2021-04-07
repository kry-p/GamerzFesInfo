import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const CardStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 8px;
  margin-bottom: 12px;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.mainColor &&
    css`
      background-color: ${palette.logo_base[0]};
    `}

  ${(props) =>
    props.subColor &&
    css`
      background-color: ${palette.logo_base[1]};
    `}

  ${(props) =>
    props.small &&
    css`
      @media (max-width: 512px) {
        width: 80%;
      }

      @media (min-width: 512px) {
        width: 448px;
      }
    `}

    ${(props) =>
    props.big &&
    css`
      @media (max-width: 512px) {
        width: 100%;
      }

      @media (min-width: 512px) {
        width: 512px;
      }
    `}
`;

const Card = (props) => {
  return <CardStyle {...props} />;
};

export default Card;
