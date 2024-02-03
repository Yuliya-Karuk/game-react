import React, { useContext } from 'react';
import './switcher.scss';
import { ThemeContext, themes } from '../../context/ThemeContext';

export const Switcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSwitchTheme = () => {
    const newTheme = themes[Object.keys(themes).filter(el => el !== theme)[0]];
    setTheme(newTheme);
  };

  return (
    <div className='switcher'>
      <label className='switcher__label' htmlFor='switcher'>
        <input
          onClick={handleSwitchTheme}
          id='switcher'
          className='switcher__input'
          type='checkbox'
          readOnly
        />
        <span className='switcher__round'></span>
      </label>
    </div>
  );
};
