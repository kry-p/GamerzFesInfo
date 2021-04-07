import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import ReviewInfo from '../components/ReviewInfo';
import Footer from '../components/Footer';

const MainStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MainPage = () => {
  return (
    <MainStyle>
      <Header />
      <ReviewInfo />
      <Footer />
    </MainStyle>
  );
};

export default MainPage;
