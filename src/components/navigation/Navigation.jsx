import React from 'react';
import { MyButton } from '../UI/button/MyButton';
import './navigation.scss';

export const Navigation = () => {
  return (
    <nav className='nav'>
      <MyButton
        className='btn nav__button'
        onClick={(e) => console.log(e)}
      >
        Reset
      </MyButton>
      <MyButton
        className='btn nav__button'
        onClick={(e) => console.log(e)}
      >
        Solution
      </MyButton>
      <MyButton
        className='btn nav__button'
        onClick={(e) => console.log(e)}
      >
        Random game
      </MyButton>
      <MyButton
        className='btn nav__button'
        onClick={(e) => console.log(e)}
      >
        Choose game
      </MyButton>
      <MyButton
        className='btn nav__button'
        onClick={(e) => console.log(e)}
      >
        Save game
      </MyButton>
      <MyButton
        className='btn nav__button'
        onClick={(e) => console.log(e)}
      >
        Load game
      </MyButton>
    </nav>
  );
};
