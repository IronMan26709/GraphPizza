import { createStore, combineReducers } from 'redux';


import userReducer from './userReducer';


const rootReducer = combineReducers({
    userReducer,
});


export const store = createStore(rootReducer);