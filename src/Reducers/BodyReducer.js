import * as types from '../Actions/Body/types';

const initialState = {
  tCurrentServer: "tDev"
};

const BodyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.T_LOAD_DEV:
      return {
        ...state,
        tCurrentServer: "tDev"
      };
    case types.T_LOAD_LIVE:
      return {
        ...state,
        tCurrentServer: "tLive"
      };
    default:
      return state;
  }
}

export default BodyReducer;