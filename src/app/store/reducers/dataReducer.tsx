import * as actions from "../actions/actionTypes";

const dataReducer = (state = {}, action: any) => {
  switch (action.type) {
    case actions.RECEIVE_BOOKS_DATA:
      return {
        ...state,
        booksData: action.booksData,
      };
    default:
      return state;
  }
};

export default dataReducer;
