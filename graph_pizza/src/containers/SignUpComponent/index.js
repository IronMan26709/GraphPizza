import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../components/forms/SignUp';
import { Registration }  from '../../actions/userAction';



const SignUpComponent = props =>{
    const handelSubmit = e =>{
    //    console.log(e) 
        props.Registration(e)
    }
    return(
        <SignUpForm onSubmit={handelSubmit}/>
    )
}

const mapDispatchToProps = dispatch => ({
    Registration: () => dispatch(Registration())
  });

export default connect(null,mapDispatchToProps)(SignUpComponent)