import React from 'react';
import './topClues.scss';
import { Clue } from '../UI/clue/Clue';

export const TopClues = ({clues}) => {
  return (
    <div className='top-clues'>
      {clues.map((el, i) =>
        <div className='top-clues__column'>
          {el.map((clue, index) =>
            <Clue clueValue={clues[i][index]} />
          )}
        </div>
      )}
    </div>
  );
};
