import * as types from '../actionTypes/userTypes';

const initialState = {
    newOrderSucс : false,
    arrayPhotos : [],
    arrayGoods : [],
    arrayCategories : [],
    arrayOrders : [],
    cart : [],
    orderSuccess : false,
    currentGood : [],
    getTheGoodDun : true
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
            return {  ...state  };


            

        case types.GET_USERS_GOODS_SUCCESS:
            return {
                ...state, arrayGoods : action.payload
            };
        case types.GET_USERS_GOODS_FAIL:

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
            return {  ...state };    
        
        case types.ADD_GOOD_IN_CART:
                return {
                    ...state,  cart: state.cart.concat( action.payload)
                };     
        case types.MAKE_ORDER_REQUEST:
                return {
                    ...state, orderSuccess : false
                };            
        case types.MAKE_ORDER_SUCCESS:
                return {
                    ...state, orderSuccess : true, cart : []
                };           
                 
        case types.CLEAR_ARRAY_GOODS :
                return {
                    ...state, cart : []
                };
        case types.INC_COUNT_ITEM_CART :
                const val = state.cart.find( el => el._id === action.payload).count + 1    
                return {
                    ...state,  
                            cart : state.cart.map( el => el._id === action.payload  ? { ...el, count : val  }  : el )
        
                };
        case types.DEC_COUNT_ITEM_CART :
            const valDec = state.cart.find( el => el._id === action.payload).count
            const res = valDec > 1 ? valDec - 1 : valDec    
            
                return{
                ...state,  
                        cart : state.cart.map( el => el._id === action.payload  ? { ...el, count : res  }  : el )
    
            };

        case types.DEL_ONE_ITEM_FROM_CART :
                return {  ...state, cart : state.cart.filter( el => el._id !== action.payload )
            };
        case types.GET_CURRENT_GOOD_REQUEST :
                return {  ...state, currentGood : [],  getTheGoodDun : true
            };
        case types.GET_CURRENT_GOOD_SUCCESS :
                console.log('currentGood',action.payload)
                return {  ...state, currentGood : action.payload, getTheGoodDun : false
            };
            
            
            
        default: {
            return state ;
        }
    }   
};