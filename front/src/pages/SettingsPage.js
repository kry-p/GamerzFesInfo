import React from 'react';

import Footer from '../components/footer/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';

import { MainStyle } from './PageStyle';

const SettingsPage = () => {
  return (
    <>
      <MainStyle>
        <HeaderContainer />
        여기에 설정 내용
        <Footer />
      </MainStyle>
    </>
  );
};

export default SettingsPage;
