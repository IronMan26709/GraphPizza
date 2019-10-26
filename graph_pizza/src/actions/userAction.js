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
    const data = await gql.request()
}
 


