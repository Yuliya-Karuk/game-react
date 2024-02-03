import React, { useState } from 'react';
import './cell.scss';
import { handleClick } from '../../../utils/handleClick';

export const Cell = ({id, realvalue}) => {
  const [cellState, setCellState] = useState('cell');
  function handlePointer(e) {
    if (e.type === 'pointerup') {
      setCellState(handleClick(e, cellState));
      console.log(cellState)
    } else {
      handleClick(e, cellState);
    }
  }

  return (
    <span
      onPointerDown={e => handlePointer(e)}
      onPointerUp={e => handlePointer(e)}
      onContextMenu={e => e.preventDefault()}
      className={cellState}
      id={id}
      realvalue={realvalue}
    >
    </span>
  );
};
