import React from 'react';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

var clickedItem = "";

const Navbar = () => {

  const [currentClass, setClass] = useState('navbar__hamburger--none');

  const Clicking = (e) => {
    e.preventDefault();

    if(currentClass === 'navbar__hamburger--none') {
      setClass('navbar__hamburger');
    }
    if(currentClass === 'navbar__hamburger') {
      setClass('navbar__hamburger--none');
    }
  }

  return (
    <div className='navbar'>
      <div className='navbar__main'>
        <div className='navbar__logo'>
          <a href="/" className='logo__link'><div><span className='logo__alejandra'>Alejandra</span><span className='logo__cuadra'>Cuadra</span></div></a>
        </div>
        <ul className='navbar__links'>
          <li><a id="installation" href='/installation'>Installation</a></li>
          <li><a id="allegories" href='/allegories'>Allegories</a></li>
          <li><a id="vessels" href='/vessels'>Vessels</a></li>
          <li><a id="public-engagement" href='/public-engagement'>Public Engagement</a></li>
          <li><a href='/about-me'>About Me</a></li>
        </ul>
        <div className='hamburger__icon--medium'>
          <MenuIcon onClick={Clicking} />
        </div>
        <div className='hamburger__icon--large'>
          <MenuIcon fontSize='large' onClick={Clicking} />
        </div>
        <div className='close__icon--medium'>
          <CloseIcon />
        </div>
        <div className='close__icon--large'>
          <CloseIcon fontSize='large'/>
        </div>
      </div>
      <div className={currentClass}>
        <ul className='hamburger__links'>
          <li><a href='/installation'>Installation</a></li>
          <li><a href='/allegories'>Allegories</a></li>
          <li><a href='/vessels'>Vessels</a></li>
          <li><a href='/public-engagement'>Public Engagement</a></li>
          <li><a href='/about-me'>About Me</a></li>
        </ul>
      </div>
    </div>
  )
}
export { clickedItem };
export default Navbar;

