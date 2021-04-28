import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '../../components/menu/Menu';
import {
  toggleDarkmode,
  toggleCancelled,
  toggleRejected,
} from '../../modules/option';

const MenuContainer = ({ history }) => {
  const settings = useSelector((state) => state.option);
  const dispatch = useDispatch();

  const onToggleDarkmode = useCallback(() => dispatch(toggleDarkmode()), [
    dispatch,
  ]);
  const onToggleCancelled = useCallback(() => dispatch(toggleCancelled()), [
    dispatch,
  ]);
  const onToggleRejected = useCallback(() => dispatch(toggleRejected()), [
    dispatch,
  ]);

  return (
    <>
      <Menu
        settings={settings}
        history={history}
        onToggleDarkmode={onToggleDarkmode}
        onToggleCancelled={onToggleCancelled}
        onToggleRejected={onToggleRejected}
      />
    </>
  );
};

export default MenuContainer;
