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






export const Registration = payload => async dispatch => {
    getToken();
    const data = await gql.request(
      `mutation reg($login:String!, $password:String!){
              createUser(login:$login, password:$password){
                  _id, login
              }}`,
      { login: payload.login, password: payload.confirmPassword, nick: payload.nick }
    );
    try {
      const {_id:id ,login} = data.createUser
      const result = { id, login };
      dispatch(SignUpSuccess (result));
      localStorage._id = id;
      dispatch(SignUpRequest(true));
    } catch (er) {
      dispatch(SignUpFail(true));
    }
  };




  export const Auth = payload => async dispatch => {
    getToken();
    const data = await gql.request(
        `query logIn( $login: String!, $password: String!){
            login (login: $login, password: $password)
        }`,
            { login: payload.login, password: payload.password}
    );
        console.log(data)
       if(data.login) 
        {localStorage.setItem("JwtToken", data.login)}
        dispatch(LogInSuccess(data.login));
        dispatch(LogInRequest(true), console.log(data));
        // dispatch(LogInFail(er))

}










// Получаем всех юзеров

export const GetUsersInfo = () => async dispatch => {
    getToken();
    console.log(gql)
    const data = await gql.request(
        `query Users{
            UserFind(query:"[{}]"){
                  _id,
                  login,
                  nick,
                  createdAt,
                  avatar{ _id, url, originalFileName,text} 
                }
              }`
    );
    console.log(data.UserFind)
}









// Получаем все товары

export const GetGoods = payload => async dispatch => {
    getToken();
    const data = await gql.request(
        `query FindGoods  {
            GoodFind (query: "[{}]") {
                _id,
                price,
                description,
                categories{
                    name},
                images{
                        _id,
                        text,
                        url
                    }
            }
        }`
    );
        console.log(data.GoodFind)
}




// Получаем катигорию по Id
export const GetCategoriById = payload => async dispatch => {
    console.log(payload)
    getToken()
    const data = await gql.request(
        `   query Category ($query : String!) {
            CategoryFindOne(query:$query){
              _id,
              name,
              goods{
                name,
                description,
                price
              }
            }
          }` 
          , { query : JSON.stringify([{ _id : payload}]) }
    );
    console.log(data)
}





// Получаем товар по Id
export const GetGoodOnlyOneById = payload => async dispatch => {
    getToken()
    const Id = payload
    console.log("payload", Id)
    const data = await gql.request(
       ` query ($query : String!){
            GoodFindOne(query: $query){
                _id,
                name,
                price
          }
        }`,{ query : JSON.stringify([{_id :Id}])
        }
    );console.log(data.GoodFindOne)
}


// Список товаров конкретного юзера

export const GetUsersGoods = payload => async dispatch => {
    getToken()
    const Id = payload === "" ? "5db5835dc2894c20669bfc89" : payload
    const data = await gql.request(
       ` query ($query : String!){
            GoodFind(query: $query){
                _id,
                name,
                price
          }
        }`,{ query : JSON.stringify([{_id :Id}])
        }
    );console.log(data.GoodFind)
}






export const GetAllPhotos = payload => async dispatch => {
    getToken()
    const data = await gql.request(
        `query ImageFind{
            ImageFind(query: "[{}]"){
                _id,
                url,
                owner {login, _id}
            }
        }`
    );
    console.log(data.ImageFind)
}



// Получить всё фото юзера по его Id

export const GetOWnersPhotos = payload => async dispatch => {
    getToken()
    const owner1 = payload === "" ? "5db5835dc2894c20669bfc89"  : payload
    
    const data = await gql.request(
       ` query ($query : String!){
        ImageFind(query: $query){
                _id,
                url,
                owner{ login, _id }
          }
        }`,{   
            query: JSON.stringify([{ ___owner: owner1 }])
        }
            
    );console.log(data.ImageFind)
}