import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { toggle } from '../../modules/option';

const HeaderContainer = ({ toggle }) => {
  return <Header onMenuClick={toggle} />;
};

export default connect(
  (state) => ({
    activate: state.activate,
  }),
  (dispatch) => ({
    toggle: () => dispatch(toggle()),
  }),
)(HeaderContainer);
