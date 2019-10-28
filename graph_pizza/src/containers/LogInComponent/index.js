import React from 'react';
import { connect } from 'react-redux';
import LogInForm from '../../components/forms/LogIn';
import { Auth ,GetUsersInfo}  from '../../actions/userAction';



const LogInComponent = props =>{
    const handelSubmit = values =>{
    //    console.log(values)
        props.Auth(values)
    }
    const click = event =>{
        props.GetUsersInfo()
    }
    return(
        <>
        <LogInForm onSubmit={handelSubmit}/>
        <button onClick={click}>Users</button>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    Auth: e => dispatch(Auth(e)),
    GetUserInfo: e =>dispatch(GetUsersInfo(e))
  });

export default connect(null,mapDispatchToProps)(LogInComponent)