import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../common/Logo/Logo';

const Header = ({ isLoggedin, isAdmin }) => {
  return(
    <>
      {isLoggedin ? (
        <header className='header'>
          <Logo />
          <div className='header__menu'>
            <NavLink to='/' activeClassName='header__menu-option_active' className='header__menu-option'>Main</NavLink>
            <NavLink to='/profile' activeClassName='header__menu-option_active' className='header__menu-option'>Profile</NavLink>
            {isAdmin ? (
              <NavLink to='/admin' activeClassName='header__menu-option_active' className='header__menu-option'>Admin</NavLink>
            ) : ('')}
          </div>
        </header>
      ) : (
        <header className='header'>
          <div className='logo'>
            <p className='logo__main-text'>INSTA</p>
            <p className='logo__sub-text'>some kind of</p>
          </div>
          <div className='header__menu'>
            <NavLink to='/sign-in' activeClassName='header__menu-option_active' className='header__menu-option'>Sign In</NavLink>
            <NavLink to='/sign-up' activeClassName='header__menu-option_active' className='header__menu-option'>Sign Up</NavLink>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;