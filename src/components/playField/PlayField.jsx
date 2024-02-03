import React from 'react';
import './playField.scss';
import { Cell } from '../UI/cell/Cell';

export const PlayField = ({winImage, mode}) => {

  return (
    <ul className={`play-field play-field_${mode}`}>
      {winImage.map((el, i) =>
        el.map((cell, index) =>
          <Cell
            id={`${i}.${index}`}
            realvalue={`${cell}`}
          />
        )
      )}
    </ul>
  );
};

          // <li
          //   onPointerDown={e => handlePointer(e)}
          //   className={name}
          //   id={`${i}.${index}`}
          //   realvalue={`${cell}`}
          // >
          // </li>
