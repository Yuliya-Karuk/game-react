import React from 'react';
import './main.scss';
import { Timer } from '../timer/Timer';
import { GameFields } from '../gameFields/GameFields';
;

export const Main = () => {
  return (
    <main className='main'>
      <Timer />
      <GameFields />
    </main>
  );
};
