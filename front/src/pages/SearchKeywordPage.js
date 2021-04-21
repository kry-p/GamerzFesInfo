import React from 'react';

import Footer from '../components/Footer';
import ReviewListKeywordContainer from '../containers/reviews/ReviewListKeywordContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

import { MainStyle } from './PageStyle';

const SearchKeywordPage = () => {
  return (
    <>
      <MainStyle>
        <HeaderContainer />
        <ReviewListKeywordContainer />
        <Footer />
      </MainStyle>
    </>
  );
};

export default SearchKeywordPage;
