import * as types from '../actionTypes/userTypes';

const initialState = {
    logined : false,
    registered : false
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOG_IN_SUCCESS:
            return {
                ...state, logined : true
            };
        case types.AUTO_LOG_IN:
            return {
                ...state, logined : true
            };
        case types.LOG_OUT_USER:
                localStorage.removeItem("JwtToken")
                return {
                    ...state, logined : false
                };
        case types.USER_SIGN_UP_SUCCESS:
                return {
                    ...state, registered : true
                };
                
                
            
            
        
        default: {
            return state ;
        }
    }   
};