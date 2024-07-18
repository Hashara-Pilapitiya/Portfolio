import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const nav_links = [
    {
        path: '#intro',
        display: 'Intro'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#experiences',
        display: 'Experiences'
    },
    {
        path: '#projects',
        display: 'Projects'
    },
    {
        path: '#courses',
        display: 'Courses'
    },
    {
        path: '#contact',
        display: 'Contact'
    }
];

const Header = () => {

  return (
    
    <header className="header">

        <div className='nav'>

            <Link to='/' className='nav__title'>
                <h1>Hashara Pilapitiya</h1>
            </Link>

            <div className='nav__menu'>
                <ul>
                    {nav_links.map((link, index) => (
                        <li key={index}>
                            <a href={link.path}>{link.display}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    </header>
  )
}

export default Header;