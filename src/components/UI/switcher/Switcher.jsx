import React from 'react';
import './switcher.scss';

export const Switcher = () => {
  return (
    <div className='switcher'>
      <label className='switcher__label' htmlFor='switcher'>
        <input id='switcher' className='switcher__input' type='checkbox'/>
        <span className='switcher__round'></span>
      </label>
    </div>
  );
};
