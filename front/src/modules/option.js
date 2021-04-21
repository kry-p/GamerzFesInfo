const TOGGLE = 'option/TOGGLE';

export const toggle = () => ({ type: TOGGLE });

const initialState = {
  activate: false,
};

function option(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        activate: !state.activate,
      };
    default:
      return state;
  }
}

export default option;
