
import * as actionTypes from './types';

export function addBook(book) {
  return {
      type: actionTypes.ADD_BOOK_CLICK,
      data: book
  };
}
