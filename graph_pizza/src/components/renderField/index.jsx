import React from 'react';
import { Error } from '../Error';
import './renderField.css';

export const renderField = ({ input, autoComplete, type, placeholder, className, meta: { touched, error } }) => {
    return (
        <div className='control-input'>
            <label>{placeholder}</label>
            <input {...input} autoComplete={autoComplete} type={type} className={className} />
            { touched && error && <Error text={error} />}
        </div>
    )
}
// export const renderField = ({ meta: { touched, error }, input: { value, onChange }, input}) => {
//     return (
//         <div className='control-input'>
//             <input {...input} value={value} onChange={onChange}/>
//             { touched && error && <Error text={error} />}
//         </div>
//     )
// }