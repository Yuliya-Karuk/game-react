import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './components/providers/ThemeProvider';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// document.documentElement.setAttribute('theme', 'dark');
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

