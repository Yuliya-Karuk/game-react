import React from 'react';
import logo from '../../assets/logo.png';
import './header.scss';
import { Navigation } from '../navigation/Navigation';
import { MyButton } from '../UI/button/MyButton';
import { Switcher } from '../UI/switcher/Switcher';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__logo'>
          <img className='header__img' src={logo} alt='logo icon'/>
          <h1 className='header__title'>Nonograms</h1>
        </div>
        <Navigation />
        <Switcher />
        <MyButton
          className='btn header__button'
          onClick={(e) => console.log(e)}
        >
          <span className='header__img header__img_settings' aria-label='Settings icon'></span>
        </MyButton>
        <MyButton
          className='btn header__button'
          onClick={(e) => console.log(e)}
        >
          <span className='header__img header__img_volume' aria-label='Volume icon'></span>
        </MyButton>
      </div>
    </header>
  );
};
