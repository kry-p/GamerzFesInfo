import React from 'react';

import Footer from '../components/footer/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';

import { MainStyle } from './PageStyle';

const MainPage = () => {
  return (
    <>
      <MainStyle>
        <HeaderContainer />
        여기에 메인 페이지 내용
        <Footer />
      </MainStyle>
    </>
  );
};

export default MainPage;
