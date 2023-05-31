import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CharacterChange.css';

const CHAR_CODE_MIN = 65;
const CHAR_CODE_MAX = 95;
const INTERVAL_MIN = 100;
const INTERVAL_MAX = 400;
const TIMER = 2500;
const MAX_CHANGES = 6;

function CharacterChange({ character }) {
  const [randomCharacter, setRandomCharacter] = useState('');
  const [isBlur, setIsBlur] = useState(true);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRandomCharacter(character);
    }, TIMER);

    return () => {
      clearTimeout(timeout);
    };
  }, [character]);

  useEffect(() => {
    if (randomCharacter === character) {
      setIsBlur(false);
      return;
    }

    const interval = setInterval(() => {
      const newCharacter = String.fromCharCode(
        Math.floor(Math.random() * (CHAR_CODE_MAX - CHAR_CODE_MIN + 1)) + CHAR_CODE_MIN,
      );

      if (newCharacter !== character) {
        setRandomCharacter(newCharacter);
        setIsBlur(true);
        setChangeCount((prevCount) => prevCount + 1);
      }
    }, Math.floor(Math.random() * (INTERVAL_MAX - INTERVAL_MIN + 1)) + INTERVAL_MIN);

    return () => {
      clearInterval(interval);
    };
  }, [character, randomCharacter]);

  useEffect(() => {
    if (changeCount >= MAX_CHANGES) {
      setRandomCharacter(character);
      setChangeCount(0);
    }
  }, [character, changeCount]);

  return (
    <span className={ isBlur ? 'blur' : 'no-blur' }>
      {randomCharacter}
    </span>
  );
}

CharacterChange.propTypes = {
  character: PropTypes.string.isRequired,
};

export default CharacterChange;
