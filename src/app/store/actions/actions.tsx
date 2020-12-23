import * as actions from "./actionTypes";

/*
 * For app state *
 */
export const setCurrentPage = (currentPage: string) => ({
  type: actions.SET_CURRENT_PAGE,
  currentPage,
});

/*
 * For data state *
 */
export const requestBooksData = () => ({
  type: actions.REQUEST_BOOKS_DATA,
});

export const receiveBooksData = (data: object) => ({
  type: actions.RECEIVE_BOOKS_DATA,
  booksData: data,
});
