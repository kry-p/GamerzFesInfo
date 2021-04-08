import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewListContainer from '../containers/reviews/ReviewListContainer';

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
      <ReviewListContainer />
      <Footer />
    </MainStyle>
  );
};

export default MainPage;
