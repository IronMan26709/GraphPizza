import * as types from '../actionTypes/userTypes';
import {getToken, gql} from '../graphQl';


const getUsersGoodsRequest = payload => ({
    type:types.GET_USERS_GOODS_REQUEST,
    payload
})

const getUsersGoodsSuccess = payload => ({
    type:types.GET_USERS_GOODS_SUCCESS,
    payload
})
const getUsersGoodsFail = payload => ({
    type:types.GET_USERS_GOODS_FAIL,
    payload
})

const makeOrderRequest = payload => ({
    type:types.MAKE_ORDER_REQUEST,
    payload
})

const makeOrderSuccess = payload => ({
    type:types.MAKE_ORDER_SUCCESS,
    payload
})
const makeOrderFail = payload => ({
    type:types.MAKE_ORDER_FAIL,
    payload
})

const currentGoodSuccessRequest = payload => ({
    type:types.GET_CURRENT_GOOD_REQUEST,
    payload
})

const currentGoodSuccessSuccess = payload => ({
    type:types.GET_CURRENT_GOOD_SUCCESS,
    payload
})
const currentGoodSuccessFail = payload => ({
    type:types.GET_CURRENT_GOOD_FAIL,
    payload
})



export const incCountTheItemCart = payload =>({
    type:types.INC_COUNT_ITEM_CART,
    payload
})
 
export const decCountTheItemCart = payload => ({
    type:types.DEC_COUNT_ITEM_CART,
    payload
})

export const delTheItemfromCart = payload => ({
    type:types.DEL_ONE_ITEM_FROM_CART,
    payload
})
export const delTheItemfromCurrentGoodArray = payload =>({
    type:types.DEL_THE_ITEM_FROM_CURRENTGOOD_ARRAY,
    payload
})



export const clearArrayGoods = payload => ({
    type:types.CLEAR_ARRAY_GOODS,
    payload
})


export const addGoodInCart = payload => ({
    type:types.ADD_GOOD_IN_CART,
    payload
})




const error1 = "Нет записей"


export const getTheGood = payload => async dispatch => {
    getToken()
    dispatch(currentGoodSuccessRequest())
    const Id = payload
    const data = await gql.request(
       ` query ($query : String!){
            GoodFind(query: $query){
                _id,
                name,
                price
          }
        }`,{ query : JSON.stringify([{_id :{ $in : Id }}])
        }
    );
    try { 
        dispatch(currentGoodSuccessSuccess(data.GoodFind))
      } catch ( error ) {
        dispatch(currentGoodSuccessFail( error ));
      }
}



export const GetUsersGoods = payload => async dispatch => {
    getToken()
    dispatch(getUsersGoodsRequest())
    const data = await gql.request(
    `query ( $query : String!) {
        CategoryFindOne(query: $query){
          goods{
            name,
            _id, 
            price,
            description, 
            images {
              url
             }
          }
        }
      }`,{ 
          query : JSON.stringify([{ _id : payload }])
      }
    );
    try {
        data.CategoryFindOne.goods.length > 0 ? 
        dispatch(getUsersGoodsSuccess (data.CategoryFindOne.goods)) :
        dispatch(getUsersGoodsFail( error1 ));
      } catch ( error ) {
        dispatch(getUsersGoodsFail( error ));
      }   
}




export const makeOrder = payload => async dispatch => {
    dispatch(makeOrderRequest())
    getToken()
    const data = await gql.request(
       `mutation ($order: OrderInput!){
        OrderUpsert(order: $order){
                _id
          }
        }`, {   
            order : payload
        }
            
    );
    try {
         dispatch(makeOrderSuccess(data.OrderUpsert))
    }
    catch ( error ) {
        dispatch(makeOrderFail(error))
    }
}




