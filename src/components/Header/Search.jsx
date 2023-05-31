import React, { useContext } from 'react';
import HomeContext from '../../pages/HomeContext';
import './Search.css';

function Search() {
  const { search, handleSearch } = useContext(HomeContext);
  return (
    <div className="nav-item">
      <form className="form-search">
        <input
          className="input-search"
          placeholder="Buscar projetos por
           habilidades separadas por vírgula. Ex: javascript, html"
          onChange={ handleSearch }
          value={ search }
        />
        <button className="btn-search">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </div>
  );
}

export default Search;
