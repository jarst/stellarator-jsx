import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Notification = ({children, type}) => {
    const classNames = [
        'notification',
        'notification-' + type
    ].join(' ');
    return (
      <section className={classNames}>{children}</section>
    );
};

Notification.propTypes = {
    type: PropTypes.oneOf(['success', 'danger', 'info'])
};

Notification.defaultProps = {
    type: 'info'
};

export default Notification;