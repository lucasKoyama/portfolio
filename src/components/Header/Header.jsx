import React from 'react';
import Headroom from 'react-headroom';
import Search from './Search';
import NavList from './NavList';
import './Header.css';

function Header() {
  return (
    <Headroom>
      <header>
        <Search />
        <div className="nav-item menu">
          <NavList />
        </div>
      </header>
    </Headroom>
  );
}

export default Header;
