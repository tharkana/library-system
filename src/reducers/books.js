import * as actionTypes from '../actions/types';

const books = (state = [], action) => {
    switch (action.type) {
      case actionTypes.ADD_BOOK_SUCCESS:
            return [action.book, ...state];
      default:
        return state
    }
  }
  
  export default books
  