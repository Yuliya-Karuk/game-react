import React from 'react';
import './clue.scss';

export const Clue = ({clueValue}) => {
  return (
    <span className='clue'>{clueValue}</span>
  );
};
