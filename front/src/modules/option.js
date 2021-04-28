import { createAction } from 'redux-actions';

const TOGGLE_DARKMODE = 'option/TOGGLE_DARKMODE';
const TOGGLE_CANCELLED = 'option/TOGGLE_CANCELLED';
const TOGGLE_REJECTED = 'option/TOGGLE_REJECTED';

export const toggleDarkmode = createAction(TOGGLE_DARKMODE);
export const toggleCancelled = createAction(TOGGLE_CANCELLED);
export const toggleRejected = createAction(TOGGLE_REJECTED);

const initialState = {
  darkmode: false,
  searchReject: false,
  searchCancel: false,
};

function option(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    case TOGGLE_CANCELLED:
      return {
        ...state,
        searchCancel: !state.searchCancel,
      };
    case TOGGLE_REJECTED:
      return {
        ...state,
        searchReject: !state.searchReject,
      };
    default:
      return state;
  }
}

export default option;
