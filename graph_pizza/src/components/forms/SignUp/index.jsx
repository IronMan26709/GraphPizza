import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import './SignUp.css';

import { renderField } from '../../renderField';
import Button from '../../Button/Button';


const SignUpForm = props =>{
    const{ handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="login"
                component={renderField}
                placeholder="Ваш email"
                className="signup-input"
                type="text"
            />
             <Field
                name="password"
                component={renderField}
                placeholder="Введите пароль"
                className="signup-input"
                type="password"
            />
            <Field
                name="confirmPassword"
                component={renderField}
                placeholder="Повторите пароль"
                className="signup-input"
                type="password"
            />
            <Button text="Регистрация"/>
        </form>
    )
}
export default reduxForm({form: "signup",})(SignUpForm)