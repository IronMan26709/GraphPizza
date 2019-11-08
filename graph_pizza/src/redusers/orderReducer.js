import * as types from '../actionTypes/userTypes';

const initialState = {
    newOrderSucс : false,
    order : [],
    arrayPhotos : [],
    arrayGoods : []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.NEW_GOOD_REQUEST:
            return {
                ...state, newOrderSucс : false
            };
        case types.NEW_GOOD_SUCCESS:
            return {
                ...state, newOrderSucс : true
            };
        case types.GET_OWN_PHOTOS_SUCCESS:
            return {
                ...state, arrayPhotos : action.payload
            };
        case types.GET_USERS_GOODS_SUCCESS:
            return {
                ...state, arrayGoods : action.payload
            };
        default: {
            return state ;
        }
    }   
};