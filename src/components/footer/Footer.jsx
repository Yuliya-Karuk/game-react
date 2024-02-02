import React from 'react';
import './footer.scss';

export const Footer = () => {
  const githubLink = 'https://github.com/Yuliya-Karuk';
  const RSLink = 'https://github.com/rolling-scopes-school/tasks/tree/master/stage1';

  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <a
          className='footer__link'
          href={githubLink}
          onClick={(e) => console.log(e)}
        >
          Yuliya
          <span className='footer__img footer__img_github'></span>
        </a>
        <a
          className='footer__link'
          href={RSLink}
          aria-label='link to RS School'
          onClick={(e) => console.log(e)}
        >
          <span className='footer__img footer__img_rs'></span>
        </a>
      </div>
    </footer>
  );
};
