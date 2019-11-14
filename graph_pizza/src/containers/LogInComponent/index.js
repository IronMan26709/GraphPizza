import React,{ useState }  from "react";
import { connect } from "react-redux";
import LogInForm from "../../components/forms/LogIn";
import { Auth } from "../../actions/userAction";
import  { Redirect } from 'react-router-dom';
import { Error }  from '../../components/Error/index';
import './LogInComponent.css'
  

const LogInComponent = props => {
  const handelSubmit = values => {
    props.Auth(values);
  };
  if ( props.logined === true ) return <Redirect to="/"/>
  
  return (
    <div className="log_in_comp">
        <LogInForm onSubmit={handelSubmit} />
        {props.error ? <Error text={"Неверный логин или пароль"} /> : null}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  Auth: e => dispatch(Auth(e))
});

const mapStateToProps = state =>({
  logined : state.userReducer.logined,
  error : state. userReducer.error
})

export default connect( mapStateToProps, mapDispatchToProps )(LogInComponent);
