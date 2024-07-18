import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <header className="header">
        <div className='nav'>
            <Link to='/' className='nav__title'>
                <h1>Hashara Pilapitiya</h1>
            </Link>
            <div className='nav__menu'>
                <ul>
                    <li>Intro</li>
                    <li>About</li>
                    <li>Experiences</li>
                    <li>Projects</li>
                    <li>Courses</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header;