simport * as types from '../actionTypes/userTypes';
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
      console.log(er)
      dispatch(SignUpFail(er));
    }
  };
 


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
    try {
      data.UserFindOne.nick !== null ? localStorage.setItem("userNick", data.UserFindOne.nick) :
      localStorage.setItem("userNick", "User")
      
      dispatch(additionalUserInfoSuccess(data.UserFindOne ))
     } catch( error ){ 
      dispatch(additionalUserInfoFail(error))
     }
}









