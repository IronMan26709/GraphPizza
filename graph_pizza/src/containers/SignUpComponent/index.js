import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../components/forms/SignUp';
import { Registration }  from '../../actions/userAction';



const SignUpComponent = props =>{
    const handelSubmit = values =>{
    //    console.log(values)
        props.Registration(values)
    }
    return(
        <SignUpForm onSubmit={handelSubmit}/>
    )
}

const mapDispatchToProps = dispatch => ({
    Registration: e => dispatch(Registration(e))
  });

export default connect(null,mapDispatchToProps)(SignUpComponent)