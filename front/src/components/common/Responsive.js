import React from 'react';
import styled from 'styled-components';

// responsive block css
const ResponsiveBlock = styled.div`
  display: flex;

  &,
  & * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 768px;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
