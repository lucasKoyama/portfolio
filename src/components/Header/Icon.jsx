import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

function Icon({ link, faIcon }) {
  return (
    <a href={ link } target="_blank" rel="noreferrer">
      <i className={ `fa-brands fa-${faIcon}` } />
    </a>
  );
}

Icon.propTypes = ({
  link: PropTypes.string,
}).isRequired;

export default Icon;
