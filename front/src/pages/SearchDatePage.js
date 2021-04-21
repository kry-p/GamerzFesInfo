import React from 'react';

import Footer from '../components/Footer';
import ReviewlistDateContainer from '../containers/reviews/ReviewListDateContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

import { MainStyle } from './PageStyle';

const SearchDatePage = () => {
  return (
    <>
      <MainStyle>
        <HeaderContainer />
        <ReviewlistDateContainer />
        <Footer />
      </MainStyle>
    </>
  );
};

export default SearchDatePage;
