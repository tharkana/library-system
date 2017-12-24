
import * as actionTypes from './types';

let nextBookId = 0
export const addBook = (text) => ({
  type: actionTypes.ADD_BOOK_CLICK,
  id: nextBookId++,
  text
})

