import * as actions from "../actions/actionTypes";

const appReducer = (state = {}, action: any) => {
  switch (action.type) {
    case actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export default appReducer;
