/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import HomeContext from './HomeContext';
import Header from '../components/Header/Header';
import TextReveal from '../components/DecryptText/TextReveal';
import Projects from '../components/Projects/Projects';
import './Home.css';

function Home() {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => setSearch(event.target.value);
  const addSkill = (skill) => {
    if (search[search.length - 1] !== ',' && search.length > 0) {
      setSearch(search.concat(', ', skill));
    } else {
      setSearch(search.concat(skill));
    }
  };
  return (
    <HomeContext.Provider value={ { search, addSkill, handleSearch } }>
      <Header />
      <main>
        <section className="about-me">
          <TextReveal
            strings={ ['LUCAS KOYAMA', 'FRONT-END', 'DEVELOPER'] }
            fontSize="8.5vw"
          />
        </section>
        <Projects search={ search } />
      </main>
    </HomeContext.Provider>
  );
}

export default Home;
