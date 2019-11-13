import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../components/forms/SignUp';
import { Registration }  from '../../actions/userAction';
import { Redirect } from 'react-router-dom'
 


const SignUpComponent = props =>{
    
    const handelSubmit = values =>{
        props.Registration(values)
    }
    if ( props.registered === true  ) return <Redirect to="/"/> 
    return(
        <SignUpForm onSubmit={handelSubmit}/>
    )
}

const mapDispatchToProps = dispatch => ({
    Registration: e => dispatch(Registration(e))
  });
const mapStateToProps = state =>({
    registered : state.userReducer.registered
})  

export default connect(mapStateToProps,mapDispatchToProps)(SignUpComponent)