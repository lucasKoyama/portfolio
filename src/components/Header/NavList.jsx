/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Skills from './Skills';
import Icon from './Icon';
import './NavList.css';

function NavList() {
  const [blur, setBlur] = useState(true);
  return (
    <nav>
      <ul>
        <li
          className="dropdown"
          onMouseEnter={ () => setBlur(false) }
          onMouseLeave={ () => setBlur(true) }
        >
          <a href="#">Habilidades</a>
          <ul className={ blur ? 'skills' : 'skills focus' }>
            <Skills />
          </ul>
        </li>
        <li>
          Contato:
          <Icon link="https://www.linkedin.com/in/lucas-koyama/" faIcon="linkedin" />
          <Icon link="https://github.com/lucasKoyama" faIcon="github" />
          <Icon link="https://wa.me/5519995405067" faIcon="whatsapp" />
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
