/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import HomeContext from '../../pages/HomeContext';

function Skills() {
  const { search, addSkill } = useContext(HomeContext);

  const checkAndAdd = (skill) => {
    if (!search.includes(skill)) { addSkill(skill); }
  };

  return (
    <>
      <h4>Web developer:</h4>
      <li onClick={ () => checkAndAdd('react') }>React classe & funcional</li>
      <li onClick={ () => checkAndAdd('jest') }>Testes em Jest</li>
      <li onClick={ () => checkAndAdd('javascript') }>JavaScript ES6</li>
      <li onClick={ () => checkAndAdd('html') }>HTML 5</li>
      <li onClick={ () => checkAndAdd('css') }>CSS 3</li>
      <li onClick={ () => checkAndAdd('redux') }>Redux</li>
      <li onClick={ () => checkAndAdd('context api') }>Context API</li>
      <li onClick={ () => checkAndAdd('git & github') }>Git & Github</li>
      <br />
      <h4>Outras habilidades:</h4>
      <li onClick={ () => checkAndAdd('unix & bash') }>Unix & Bash</li>
      <li onClick={ () => checkAndAdd('python') }>Python</li>
      <li onClick={ () => checkAndAdd('java') }>Java</li>
      <li onClick={ () => checkAndAdd('vba') }>VBA</li>
      <div className="skills-description">
        <p>Estas são minhas habilidades como Desenvolvedor!</p>
        <p>Clique em uma ou mais para filtrar e ver os projetos que as utilizei.</p>
      </div>
    </>
  );
}

export default Skills;
