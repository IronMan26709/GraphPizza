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
                // categories: { _id : payload.categories
                // }
              }
        }
            
    );
    try {
        console.log(data.GoodUpsert)
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
                _id
          }
        }`,{   
            category : { 
                name: payload.name,
                // _id : payload.id,
                goods : { _id : payload.idGood}
                // categories: { _id : payload.categories
                // }
              }
        }
            
    );
    try {
        console.log(data.CategoryUpsert)
         dispatch(newCategorySuccess(data.CategoryUpsert._id))
    }
    catch ( error ) {
        dispatch(newCategoryFail(error))
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
        dispatch(getOwnPhotosSuccess (data.ImageFind));
      } catch (error) {
        dispatch(getOwnPhotosFail(error));
      }
}

export const GetUsersGoods = payload => async dispatch => {
    getToken()
    dispatch(getUsersGoodsRequest())
    const Id = payload === "" ? "5db5835dc2894c20669bfc89" : payload
    const data = await gql.request(
       ` query ($query : String!){
            GoodFind(query: $query){
                _id,
                price,
                name,
                description,
                categories{
                    name,
                    _id
                },
                images{
                        _id,
                        url
                    }
            }
        }`,{ query : JSON.stringify([{_id :Id}])
        }
    );
    try {
        console.log(data.GoodFind)
        dispatch(getUsersGoodsSuccess (data.GoodFind));
      } catch (error) {
        dispatch(getUsersGoodsFail(error));
      }
    
}