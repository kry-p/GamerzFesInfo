import React from 'react';
import styled, { css } from 'styled-components';

const CardStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin: 12px;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.half &&
    css`
      width: 50%;
      float: left;
    `}

  ${(props) =>
    props.full &&
    css`
      width: 100%;
      float: left;
    `}

  .header {
    @media (max-width: 1024px) {
      width: 512px;
    }

    @media (max-width: 768px) {
      width: 512px;
    }
  }
`;

const Card = (props) => {
  return <CardStyle {...props} />;
};

export default Card;
