import * as types from '../actionTypes/userTypes';

const initialState = {
    logined : false,
    registered : false,
    userInfo : [],
    error : false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOG_IN_SUCCESS:
            return {
                ...state, logined : true, error : false
            };
        case types.USER_LOG_IN_FAIL:
                return {
                    ...state, error : true
                };    
        case types.AUTO_LOG_IN:
            return {
                ...state, logined : true 
            };
        case types.LOG_OUT_USER:
                localStorage.removeItem("JwtToken");    
                localStorage.removeItem("userNick")
                return {
                    ...state, logined : false
                };
        case types.USER_SIGN_UP_SUCCESS:
                return {
                    ...state, registered : true
                };
        case types.ADDITIONAL_USER_INFO_SUCCESS:
                return {
                    ...state,userInfo : action.payload
                };
        default: {
            return state ;
        }
    }   
};