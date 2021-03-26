import React from 'react';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import Tab from '../components/common/Tab';

const { Footer } = Layout;

const MainPage = () => {
  return (
    <>
      <Tab />
      <Layout>
        <Footer style={{ textAlign: 'center' }}>author</Footer>
      </Layout>
    </>
  );
};

export default MainPage;
