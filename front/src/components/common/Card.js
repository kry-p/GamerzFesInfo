import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Card = (props) => {
  return <CardStyle {...props} />;
};

export default Card;
