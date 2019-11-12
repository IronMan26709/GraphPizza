import * as types from '../actionTypes/userTypes';

const initialState = {
    logined : false
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOG_IN_SUCCESS:
            return {
                ...state, logined : true
            };
        
        default: {
            return state ;
        }
    }   
};