import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewListKeywordContainer from '../containers/reviews/ReviewListKeywordContainer';
import ReviewlistDateContainer from '../containers/reviews/ReviewListDateContainer';

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
      {/* <ReviewListKeywordContainer /> */}
      <ReviewlistDateContainer />
      <Footer />
    </MainStyle>
  );
};

export default MainPage;
