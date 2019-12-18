import { createStore, applyMiddleware } from "redux";
import { Reducers } from "./reducers";
import createMiddlewareSaga from 'redux-saga';
import sagas from './sagas';
const sagaMiddleware = createMiddlewareSaga();
export const Store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default Store;
