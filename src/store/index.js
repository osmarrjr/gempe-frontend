import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import user from './reducer/user.reducer';
import rootSaga from './sagas/user.sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    user
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;