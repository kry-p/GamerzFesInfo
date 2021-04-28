import React from 'react';
import { Route } from 'react-router-dom';
// import MainPage from './pages/MainPage';
import SearchDatePage from './pages/SearchDatePage';
import SearchKeywordPage from './pages/SearchKeywordPage';
import MenuPage from './pages/MenuPage';

const App = () => {
  return (
    <>
      {/* <Route component={MainPage} path="/" exact /> */}
      <Route component={SearchDatePage} path="/search/date" exact />
      <Route component={SearchKeywordPage} path="/search/keyword" exact />
      <Route component={SearchKeywordPage} path="/" exact />
      <Route component={MenuPage} path="/menu" exact />
    </>
  );
};

export default App;
