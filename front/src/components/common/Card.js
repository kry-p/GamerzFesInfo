import React from 'react';
import styled, { css } from 'styled-components';

// color
import palette from '../../lib/styles/palette';

// card css
const CardStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  /* margin: 0.25rem; */
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.75rem;
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
    props.search &&
    css`
      background-color: ${palette.gray[0]};
      margin: 0;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      padding-right: 0rem;
      padding-top: 0rem;
      padding-bottom: 0rem;

      @media (max-width: 512px) {
        width: 100%;
      }

      @media (min-width: 512px) {
        width: 512px;
      }
    `}

  ${(props) =>
    props.header &&
    css`
      padding: 0.25rem;
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
