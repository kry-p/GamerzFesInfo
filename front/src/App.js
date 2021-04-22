import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchDatePage from './pages/SearchDatePage';
import SearchKeywordPage from './pages/SearchKeywordPage';

const App = () => {
  return (
    <>
      {/* <Route component={MainPage} path="/" exact /> */}
      <Route component={SearchDatePage} path="/search/date" exact />
      <Route component={SearchKeywordPage} path="/" exact />
    </>
  );
};

export default App;
