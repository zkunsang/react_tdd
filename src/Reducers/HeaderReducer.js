import * as types from '../Actions/Header/types';

const initialState = {
  currentServer: "dev"
};

const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_DEV:
      return {
        ...state,
        currentServer: "dev"
      };
    case types.LOAD_LIVE:
      return {
        ...state,
        currentServer: "live"
      };
    default:
      return state;
  }
}

export default HeaderReducer;