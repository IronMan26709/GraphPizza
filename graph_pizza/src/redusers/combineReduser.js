import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from "redux-form";
import  thunk  from 'redux-thunk';
  
import userReducer from './userReducer';


const rootReducer = combineReducers({
    userReducer,
    form: formReducer,
});


export const store = createStore(rootReducer,applyMiddleware( thunk ));