import React from 'react';
import './button.scss';

export const MyButton = ({children, ...props}) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
}
