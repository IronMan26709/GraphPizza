import * as types from '../actionTypes/userTypes';
import {getToken, gql} from '../graphQl';


const SignUpRequest = payload =>({
    type:types.USER_SIGN_UP_REQUEST,
    payload
});
const SignUpSuccess = payload =>({
    type:types.USER_SIGN_UP_SUCCESS,
    payload
});

const SignUpFail = payload =>({
    type: types.USER_SIGN_UP_FAIL,
    payload
});


const LogInRequest = payload => ({
    type:types.USER_LOG_IN_REQUEST,
    payload
})
const LogInSuccess = payload => ({
    type:types.USER_LOG_IN_SUCCESS,
    payload
})
const LogInFail = payload => ({
    type:types.USER_LOG_IN_FAIL,
    payload
})

export const autoLogin = () => ({
    type:types.AUTO_LOG_IN
})
export const LogOut = () =>({
  type:types.LOG_OUT_USER
})

const additionalUserInfoRequest = payload => ({
  type:types.ADDITIONAL_USER_INFO_REQUEST,
  payload
})
const additionalUserInfoSuccess = payload => ({
  type:types.ADDITIONAL_USER_INFO_SUCCESS,
  payload
})
const additionalUserInfoFail = payload => ({
  type:types.ADDITIONAL_USER_INFO_FAIL,
  payload
})





// const userUpsertRequest = payload => ({
//     type:types.USER_UPSERT_REQUEST,
//     payload
// })
// const userUpsertSuccess = payload => ({
//     type:types.USER_UPSERT_SUCCESS,
//     payload
// })
// const userUpsertFail = payload => ({
//     type:types.USER_UPSERT_FAIL,
//     payload
// })




export const Registration = payload => async dispatch => {
    getToken();
    dispatch(SignUpRequest());
    const data = await gql.request(
      `mutation reg( $user : UserInput ){
        UserUpsert( user : $user ){
                  _id
              }}`,
        { user : { login:payload.login , password: payload.confirmPassword }}
    );
    try {
      const {_id:id ,login} = data.UserUpsert
      const result = { id, login };
      dispatch(SignUpSuccess (result));
      localStorage._id = id;
    } catch (er) {
      dispatch(SignUpFail(er));
    }
  };






  // export const UserUpsert = payload => async dispatch => {
  //   getToken();
  //   dispatch(userUpsertRequest());
  //   console.log(payload)
  //   const data = await gql.request(
  //       `mutation ( $user : UserInput) {
  //               UserUpsert( user : $user){
  //                 _id, login, nick, acl
  //               }
  //             }`,
  //       { user : {  _id : localStorage._id, nick : payload.nick ,  login : payload.login }}
  //   );
  //       console.log("UserUpsert", data.UserUpsert.login)
  //   try {
  //     dispatch(userUpsertSuccess (data.UserUpsert.login));
  //   //   localStorage._id = id;
  //   } catch (er) {
  //     dispatch(userUpsertFail(true));
  //   }
  // };
  


  export const Auth = payload => async dispatch => {
    getToken();
    dispatch(LogInRequest(true))
    const data = await gql.request(
        `query logIn( $login: String!, $password: String!){
            login (login: $login, password: $password)
        }`,
            { login: payload.login, password: payload.password}
    );    
      try {

       if (data.login) 
        {localStorage.setItem("JwtToken", data.login)}

        dispatch(LogInSuccess(data.login));
        dispatch( GetUserInfo ());
      } catch( error ){ 
        dispatch(LogInFail(error))
      }
}










// Получаем всех юзеров

export const GetUserInfo = () => async dispatch => {
    dispatch(additionalUserInfoRequest())
    getToken();
    console.log("localStorage._id",localStorage._id)
    const data = await gql.request(
        `query Users ( $query : String ) {
            UserFindOne(query: $query){
                  _id,
                  login,
                  nick,
                  createdAt,
                  avatar{ _id, url, originalFileName,text} 
                }
              }`,
              {
                query : JSON.stringify([{
                      _id : localStorage._id
                }])
            } 
    );
    const dataa = data.UserFindOne.nick
    console.log("userReducerUserADDinfo", dataa.nick)
    try {
      localStorage.setItem("userNick", data.UserFindOne.nick)
      dispatch(additionalUserInfoSuccess(data.UserFindOne ))
     } catch( error ){ 
      dispatch(additionalUserInfoFail(error))
     }
}









// Получаем все товары юзера


// .control-input// export const GetGoods = payload => async dispatch => {
//     getToken();
//     const data = await gql.request(
//         `query FindGoods ( $query : String) {
//             GoodFind (query: $query) {
//                 _id,
//                 price,
//                 name,
//                 description,
//                 categories{
//                     name},
//                 images{
//                         _id,
//                         text,
//                         url
//                     }
//             }
//         }`, {
//             query: JSON.stringify([{ ___owner: localStorage._id }])
//         }
//     );console.log(data.GoodFind)
// }




// Получаем катигорию по Id
// export const GetCategoriById = payload => async dispatch => {
//     console.log(payload)
//     getToken()
//     const data = await gql.request(
//         `   query Category ($query : String!) {
//             CategoryFindOne(query:$query){
//               _id,
//               name,
//               goods{
//                 name,
//                 description,
//                 price
//               }
//             }
//           }` 
//           , { query : JSON.stringify([{ _id : payload}]) }
//     );
//     console.log(data)
// }





// Получаем товар по Id


// Список товаров конкретного юзера

// export const GetUsersGoods = payload => async dispatch => {
//     getToken()
//     const Id = payload === "" ? "5db5835dc2894c20669bfc89" : payload
//     const data = await gql.request(
//        ` query ($query : String!){
//             GoodFind(query: $query){
//                 _id,
//                 name,
//                 price
//           }
//         }`,{ query : JSON.stringify([{_id :Id}])
//         }
//     );console.log(data.GoodFind)
// }





// работает
// export const GetAllPhotos = payload => async dispatch => {
//     getToken()
//     const data = await gql.request(
//         `query ImageFind{
//             ImageFind(query: "[{}]"){
//                 _id,
//                 url,
//                 owner {login, _id}
//             }
//         }`
//     );
    
//     try {
//         dispatch(userUpsertSuccess (data.UserUpsert.login));
//         console.log(data.ImageFind)
//         dispatch(userUpsertRequest(true));
//       } catch (er) {
//         dispatch(userUpsertFail(true));
//       }
// }



// Получить всё фото юзера по его Id
// работает
// export const GetOWnersPhotos = payload => async dispatch => {
//     getToken()
//     const owner1 = payload === "" ? localStorage._id  : payload
//     const data = await gql.request(
//        ` query ($query : String!){
//         ImageFind(query: $query){
//                 _id,
//                 url,
//                 text,
//                 owner{ login, _id }
//           }
//         }`,{   
//             query: JSON.stringify([{ ___owner: owner1 }])
//         }
            
//     );console.log(data.ImageFind)
// }








