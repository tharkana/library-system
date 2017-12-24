import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { postBook } from '../api';
import * as actionTypes from './types';

function* handleServerResponse(book, success, failed, errorMsg, additional = {}) {
    if (book && book.name) {
        yield put(Object.assign({}, { type: success, book }, additional));
    } else {
        yield put({ type: failed, error: errorMsg });
    }
}

export function* addBook(action) {
    try {
        const book = yield call(postBook, action.data);

        yield* handleServerResponse(
            book,
            actionTypes.ADD_BOOK_SUCCESS,
            actionTypes.ADD_BOOK_FAILED,
            'NETWORK ERROR: Todo wasn\'t created'
        );
    } catch(e) {
        yield put({
            type: actionTypes.ADD_BOOK_FAILED,
            error: e
        });
    }
}

function* watchAddBook() {
    yield* takeEvery(actionTypes.ADD_BOOK_CLICK, addBook);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        watchAddBook()
    ];
}