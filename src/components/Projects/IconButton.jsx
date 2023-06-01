import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

function IconButton({ icon, type, text, bgColor, url }) {
  return (
    <a
      className="icon-button"
      style={ { backgroundColor: bgColor } }
      href={ url }
      target="_blank"
      rel="noreferrer"
    >
      <i className={ `fa-${type} fa-${icon} icon` } />
      <span className="text">{text}</span>
      <i className="fa-solid fa-chevron-right" />
    </a>
  );
}

IconButton.propTypes = ({
  icon: PropTypes.string,
  text: PropTypes.string,
}).isRequired;

export default IconButton;
