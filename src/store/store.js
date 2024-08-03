import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';
import userReducer from './reducers/userreducer';

const rootReducers = combineReducers({ todoReducer, userReducer });

const store = createStore(rootReducers);
export default store;
