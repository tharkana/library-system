import { createStore, applyMiddleware } from 'redux';
import libApp from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../actions/sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    const store = createStore(
        libApp,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
