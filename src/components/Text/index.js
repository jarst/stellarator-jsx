import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Text = ({children, heading, size}) => {
    const classNames = [
        'text',
        heading ? 'text-heading' : '',
        'text-' + size
    ].join(' ');
    return (
        <span className={classNames}>{children}</span>
    )
};

Text.propTypes = {
    heading: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Text.defaultProps = {
    heading: false,
    size: 'medium'
};


export default Text;