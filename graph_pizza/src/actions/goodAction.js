import * as types from '../actionTypes/userTypes';
import {getToken, gql} from '../graphQl';


const newGoodRequest = payload => ({
    type:types.NEW_GOOD_REQUEST,
    payload
})
const newGoodSuccess = payload => ({
    type:types.NEW_GOOD_SUCCESS,
    payload
})
const newGoodFail = payload => ({
    type:types.NEW_GOOD_FAIL,
    payload
})  


const newCategoryRequest = payload => ({
    type:types.NEW_CATEGORY_REQUEST,
    payload
})
const newCategorySuccess = payload => ({
    type:types.NEW_CATEGORY_SUCCESS,
    payload
})
const newCategoryFail = payload => ({
    type:types.NEW_CATEGORY_FAIL,
    payload
})  



const getOwnPhotosRequest = payload => ({
    type:types.GET_OWN_PHOTOS_REQUEST,
    payload
})
const getOwnPhotosSuccess = payload => ({
    type:types.GET_OWN_PHOTOS_SUCCESS,
    payload
})
const getOwnPhotosFail = payload => ({
    type:types.GET_OWN_PHOTOS_FAIL,
    payload
})


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



const getAllCategoriesRequest = payload => ({
    type:types.GET_ALL_CATEGORIES_REQUEST,
    payload
})

const getAllCategoriesSuccess = payload => ({
    type:types.GET_ALL_CATEGORIES_SUCCESS,
    payload
})
const getAllCategoriesFail = payload => ({
    type:types.GET_ALL_CATEGORIES_FAIL,
    payload
})



const getOrdersRequest = payload => ({
    type:types.GET_ALL_ORDERS_REQUEST,
    payload
})

const getOrdersSuccess = payload => ({
    type:types.GET_ALL_ORDERS_SUCCESS,
    payload
})
const getOrdersFail = payload => ({
    type:types.GET_ALL_ORDERS_FAIL,
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




export const clearArrayGoods = payload => ({
    type:types.CLEAR_ARRAY_GOODS,
    payload
})


export const addGoodInCart = payload => ({
    type:types.ADD_GOOD_IN_CART,
    payload
})


const error1 = "Нет записей"

export const NewGood = payload => async dispatch => {
    dispatch(newGoodRequest())
    getToken()
    const data = await gql.request(
       `mutation ($good : GoodInput!){
        GoodUpsert(good: $good){
                _id
          }
        }`,{   
            good : {
                _id : payload.id, 
                name: payload.name,
                price: payload.price,
                description: payload.description,
                images:{
                    _id: payload.image
                }
              }
        }
            
    );
    try {
         dispatch(newGoodSuccess(data.GoodUpsert._id))
    }
    catch ( error ) {
        dispatch(newGoodFail(error))
    }
}




export const NewCategory = payload => async dispatch => {
    dispatch(newCategoryRequest())
    getToken()
    const data = await gql.request(
       `mutation ($category: CategoryInput!){
        CategoryUpsert(category: $category){
                _id,
                name,
                goods {
                    _id,
                    name
                }
          }
        }`, {   
            category :{ 
                name: payload.name,
                _id : payload.id,
                goods : [
                    { _id : payload.idGood , name : payload.goodName}
                ]
              }
        }
            
    );
    try {
         dispatch(newCategorySuccess(data.CategoryUpsert._id))
    }
    catch ( error ) {
        dispatch(newCategoryFail(error))
    }
}






export const GetAllCategories = payload => async dispatch => {
    dispatch(getAllCategoriesRequest())
    getToken()
    const data = await gql.request(
       `query ( $query : String ){
        CategoryFind(query: $query){
                _id,
                name,
                goods{ 
                    name
                }
          }
        }`, {
            query : JSON.stringify([{
                 ___owner : localStorage._id
            }])
        }
            
    );
    try {
         dispatch(getAllCategoriesSuccess(data.CategoryFind))
    }
    catch ( error ) {
        dispatch(getAllCategoriesFail(error))
    }
}


export const GetOrders = payload => async dispatch => {
    dispatch(getOrdersRequest())
    getToken()
    const data = await gql.request(
       `query ( $query : String ) {
        OrderFind(query: $query){
                _id,
                owner{
                    login
                }
                total
          }
        }`, {
            query : JSON.stringify([{
                 ___owner : localStorage._id
            }])
        }    
    );
    try {
        data.OrderFind.length > 0 ?
         dispatch(getOrdersSuccess(data.OrderFind)) :
         dispatch(getOrdersFail(error1))
    }
    catch ( error ) {
        dispatch(getOrdersFail(error))
    }
}







export const GetAllPhotos = payload => async dispatch => {
    const ownerId = localStorage._id 
    getToken()
    dispatch(getOwnPhotosRequest());
    const data = await gql.request(
        `query ImageFind ( $query : String ){
            ImageFind(query: $query){
                _id,
                url,
                owner {login, _id}
            }
        }`,{   
            query: JSON.stringify([{ ___owner: ownerId }])
        }
    );
    
    try {
        data.ImageFind.length > 0  ? 
        dispatch(getOwnPhotosSuccess (data.ImageFind)) :
         dispatch(getOwnPhotosFail( error1 )) ; 
      } catch ( error ) {
        dispatch(getOwnPhotosFail( error ));
      }
}

export const GetUsersGoods = payload => async dispatch => {
    getToken()
    dispatch(getUsersGoodsRequest())
    const data = await gql.request(
    //    ` query ($query : String!){
    //         GoodFind(query: $query){
    //             _id,
    //             price,
    //             name,
    //             description,
    //             categories{
    //                 name,
    //                 _id
    //             },
    //             images{
    //                     _id,
    //                     url
    //                 }
    //         }
    //     }`,{ query : JSON.stringify([{ ___owner : localStorage._id}])
    //     }
    // );

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
         dispatch(makeOrderSuccess(data. OrderUpsert))
    }
    catch ( error ) {
        dispatch(makeOrderFail(error))
    }
}




