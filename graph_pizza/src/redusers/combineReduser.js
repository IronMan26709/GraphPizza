import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
 
import userReducer from './userReducer';


const rootReducer = combineReducers({
    userReducer,
    form: formReducer,
});


export const store = createStore(rootReducer);