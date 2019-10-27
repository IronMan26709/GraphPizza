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



export const Registration = payload => async dispatch => {
    getToken();
    console.log(payload)
    const data = await gql.request(
      `mutation reg($login:String!, $password:String!){
              createUser(login:$login, password:$password){
                  _id, login
              }}`,
      { login: payload.login, password: payload.confirmPassword }
    );
    try {
      const id = data.createUser._id.split(":").join();
      const login = data.createUser.login.split(":").join();
      const result = { id, login };
      dispatch(SignUpSuccess (result));
      localStorage._id = id;
      dispatch(SignUpRequest(true));
    } catch (er) {
      dispatch(SignUpFail(true));
    }
  };





// export const Registration = payload =>{
//     return async dispatch => {
//         dispatch(SignUpRequest());
//         getToken();
//         console.log(payload)
//         const data = await gql.request(
//             ` mutation Registration(login: String!, password: String!){
//                 createUser(login: $login, password: $password){
//                     _id, login
//                 }}`,
//                 { login:payload.Email, password:payload.confirmPassword }
//         );
//             console.log(data)
        
//         //    dispatch(SignUpSuccess(data));
//         //    ;
//         //    dispatch(SignUpFail  (true));
//     };
// }


