import React from 'react';

import Footer from '../components/footer/Footer';
import Header from '../components/Header';
import Menu from '../components/menu/Menu';
import MenuContainer from '../containers/common/MenuContainer';

import { MainStyle } from './PageStyle';

const SettingsPage = ({ history }) => {
  return (
    <>
      <MainStyle>
        <Header history={history} />
        <MenuContainer history={history} />
        <Footer />
      </MainStyle>
    </>
  );
};

export default SettingsPage;
