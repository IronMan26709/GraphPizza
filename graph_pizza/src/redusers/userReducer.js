import * as types from '../actionTypes/userTypes';

const initialState = {
    logined : false
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOG_IN:
            return {
                ...state
            };
        
        default: {
            return state ;
        }
    }
};