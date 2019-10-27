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
    try{
        localStorage.setItem("JwtToken", data.login)
        dispatch(LogInSuccess(data.login));
        dispatch(LogInRequest(true), console.log(data));
    } catch (er) {
        dispatch(LogInFail(er))
    }

}



export const GetUserInfo = payload => async dispatch => {
    getToken();
    const ID = localStorage._id
    const data = await gql.request(
        `query FindUser {
            UserFind (query : "[]"){
                login,
                nich,
                _id
            }
        }`
    );
    try{
        console.log(data)
        // localStorage.setItem("JwtToken", data.login)
        // dispatch(LogInSuccess(data.login));
        // dispatch(LogInRequest(true));
    } catch (er) {
        // dispatch(LogInFail(er))
    }

}


