import React from 'react';
import { Error } from '../Error/Error'

export const renderTextArea = ({ input, type, placeholder, className, meta: { touched, error, warning } }) => {
    return (
        <div className='control-input'>
            <textarea {...input} type={type} placeholder={placeholder} className={className} />
            { touched && error && <Error text={error} /> }
        </div>
    )
}