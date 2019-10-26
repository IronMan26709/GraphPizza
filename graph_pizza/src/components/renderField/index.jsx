import React from 'react';
import { Error } from '../Error'

export const renderField = ({ input, autoComplete, type, placeholder, className, meta: { touched, error } }) => {
    return (
        <div className='control-input'>
            <input {...input} autoComplete={autoComplete} type={type} placeholder={placeholder} className={className} />
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