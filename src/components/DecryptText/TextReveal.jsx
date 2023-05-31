import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CharacterChange from './CharacterChange';
import './TextReveal.css';

const timerToGlitch = 2700;

function TextReveal({ strings, fontSize }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setGlitch(true), timerToGlitch);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="text-reveal" style={ { fontSize } }>
      { glitch
        ? strings.map((string, index) => {
          return (
            <div className="content" key={ index }>
              <p className="text" data-text={ string }>{string}</p>
            </div>
          );
        })
        : strings.map((string, index) => {
          return (
            <p key={ index }>
              {
                string.split('').map((char, idx) => {
                  return <CharacterChange key={ idx } character={ char } />;
                })
              }
            </p>
          );
        })}
    </div>
  );
}

TextReveal.propTypes = ({
  strings: PropTypes.array,
  fontSize: PropTypes.number,
}).isRequired;

export default TextReveal;
