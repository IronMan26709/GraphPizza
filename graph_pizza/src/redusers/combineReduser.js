import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from "redux-form";
import  thunk  from 'redux-thunk';
  
import userReducer from './userReducer';
import orderReducer from './orderReducer';


const rootReducer = combineReducers({
    userReducer,
    orderReducer,
    form: formReducer,
});


export const store = createStore(rootReducer,applyMiddleware( thunk ));