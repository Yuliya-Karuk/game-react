import React from 'react';
import './leftClues.scss';
import { Clue } from '../UI/clue/Clue';

export const LeftClues = ({clues}) => {
  return (
    <div className='left-clues'>
      {clues.map((el, i) =>
        <div className='left-clues__row'>
          {el.map((clue, index) =>
            <Clue clueValue={clues[i][index]} />
          )}
        </div>
      )}
    </div>
  );
};
