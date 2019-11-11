import * as types from '../actionTypes/userTypes';

const initialState = {
    newOrderSucс : false,
    arrayPhotos : [],
    arrayGoods : [],
    arrayCategories : [],
    arrayOrders : [],
    cart : []
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
        case types.GET_OWN_PHOTOS_FAIL:
            console.log(action.payload)
            return {  ...state  };


            

        case types.GET_USERS_GOODS_SUCCESS:
            return {
                ...state, arrayGoods : action.payload
            };
        case types.GET_USERS_GOODS_FAIL:
                console.log(action.payload)
            return {  ...state  };
        case types.GET_ALL_CATEGORIES_SUCCESS:
            return {
                ...state, arrayCategories : action.payload
            };        
        case types.GET_ALL_ORDERS_SUCCESS:
            return {
                ...state, arrayOrders : action.payload
            };
        case types.GET_ALL_ORDERS_FAIL:
                console.log(action.payload)
            return {  ...state };    
        
        case types.ADD_GOOD_IN_CART:
                return {
                    ...state,  cart: state.cart.concat( action.payload)
                };       
        case types.MAKE_ORDER_SUCCESS:
                return {
                    ...state
                };           
                 
        default: {
            return state ;
        }
    }   
};