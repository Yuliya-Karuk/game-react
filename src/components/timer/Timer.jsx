import React, {useState} from 'react';
import './timer.scss';

export const Timer = () => {
  const [timer, setTimer] = useState('00:00');

  return (
    <div className='timer'>{timer} </div>
  );
};
