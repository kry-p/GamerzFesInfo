import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  /* padding-left: 1rem; */
  /* padding-right: 1rem; */
  /* width: 1024px; */
  /* margin: 0 auto; */
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
