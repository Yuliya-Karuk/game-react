import React from 'react';
import './playField.scss';

export const PlayField = ({winImage, mode}) => {
  console.log(winImage);

  return (
    <ul className={`play-field play-field_${mode}`}>
      {winImage.map((el, i) =>
        el.map((cell, index) =>
          <li className='cell' id={`${i}.${index}`} realvalue={`${cell}`}></li>
        )
      )}
    </ul>
  );
};

