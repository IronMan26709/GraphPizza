import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../components/forms/SignUp';
import { Registration }  from '../../actions/userAction';
import { Redirect } from 'react-router-dom';
import './signUp.css'
  


const SignUpComponent = props =>{
    
    const handelSubmit = values =>{
        props.Registration(values)
    }
    if ( props.registered === true  ) return <Redirect to="/"/> 
    return(
        <div className="sign_up_wrap">
            <SignUpForm onSubmit={handelSubmit}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    Registration: e => dispatch(Registration(e))
  });
const mapStateToProps = state =>({
    registered : state.userReducer.registered
})  

export default connect(mapStateToProps,mapDispatchToProps)(SignUpComponent)