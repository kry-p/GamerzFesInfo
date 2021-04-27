import React from 'react';

import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import Menu from '../components/menu/Menu';

import { MainStyle } from './PageStyle';

const SettingsPage = ({ history }) => {
  return (
    <>
      <MainStyle>
        <Header history={history} />
        <Menu history={history} />
        <Footer />
      </MainStyle>
    </>
  );
};

export default SettingsPage;
