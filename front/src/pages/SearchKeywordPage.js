import React from 'react';

import Footer from '../components/footer/Footer';
import ReviewListKeywordContainer from '../containers/reviews/ReviewListKeywordContainer';

import { MainStyle } from './PageStyle';
import Header from '../components/Header';

const SearchKeywordPage = ({ history }) => {
  return (
    <>
      <MainStyle>
        <Header history={history} />
        <ReviewListKeywordContainer />
        <Footer />
      </MainStyle>
    </>
  );
};

export default SearchKeywordPage;
