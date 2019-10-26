import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../components/forms/SignUp';
import { Registration }  from '../../actions/userAction';



const SignUpComponent = props =>{
    const handelSubmit = e =>{
    //    console.log(props) 
        props.Registration(e)
    }
    return(
        <SignUpForm onSubmit={handelSubmit}/>
    )
}

export default connect(null,{ Registration })(SignUpComponent)