import React from 'react';

import Footer from '../components/footer/Footer';
import ReviewlistDateContainer from '../containers/reviews/ReviewListDateContainer';

import { MainStyle } from './PageStyle';
import Header from '../components/Header';

const SearchDatePage = ({ history }) => {
  return (
    <>
      <MainStyle>
        <Header history={history} />
        <ReviewlistDateContainer />
        <Footer />
      </MainStyle>
    </>
  );
};

export default SearchDatePage;
