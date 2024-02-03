import React, {useState, useEffect }from 'react';
import { ThemeContext, themes } from '../context/ThemeContext';

export const ThemeProvider = ({ children }) => {
  const [ theme, setTheme ] = useState(themes.dark);

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
  }, [ theme ])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
