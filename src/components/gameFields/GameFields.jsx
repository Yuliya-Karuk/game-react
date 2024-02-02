import React from 'react';
import './gameFields.scss';
import { PlayField } from '../playField/PlayField';
import { templatesById } from '../../data';
import { countClues, createArrayOneSize } from '../../utils/utuls';
import { TopClues } from '../topClues/TopClues';
import { LeftClues } from '../leftClues/LeftClues';

const ModeTypes = {
  5: 'easy',
  10: 'medium',
  15: 'hard',
}

export const GameFields = () => {
  const winImage = templatesById[0].matrix;
  const mode = ModeTypes[winImage.length];
  const clues = countClues(winImage);
  const topClues = createArrayOneSize(clues[1]);
  const leftClues = createArrayOneSize(clues[0]);

  return (
    <div className={`game-field game-field_${mode}`}>
      <div className='game-field__container'>
        <TopClues clues={topClues} />
        <div className='game-field__row'>
          <LeftClues clues={leftClues} />
          <PlayField winImage={winImage} mode={mode} />
        </div>
      </div>
    </div>
  );
};
