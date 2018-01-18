import React from 'react';
import PropTypes from 'prop-types';


//
// Component:
//     Input
//


const Input = ({type, name, placeholder, label, value, size, error, onInputChange}) => {

    return (
        <div>
            { label ? <label for={name}>{label}</label> : '' }
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={onInputChange}/>
        </div>
    )
};

Input.propTypes = {
    type: PropTypes.oneOf(['email', 'text', 'phone', 'textarea', 'password']),
    name: PropTypes.string,
    placeholder:PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    error: PropTypes.string,
    onInputChange: PropTypes.func
};

Text.defaultProps = {
    type: text,
    size: 'medium',
    onInputChange: () => {console.log('change!')}
};

export default Input;