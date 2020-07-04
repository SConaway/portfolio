import React from 'react';

import resumeData from './../../resumeData.json';

const Header = () => {
    return (
        <header id='home'>
            <nav id='nav-wrap'>
                <a
                    className='mobile-btn'
                    href='#nav-wrap'
                    title='Show navigation'
                >
                    Show navigation
                </a>
                <a className='mobile-btn' href='#home' title='Hide navigation'>
                    Hide navigation
                </a>

                <ul id='nav' className='nav'>
                    <li className='current'>
                        <a className='smoothscroll' href='#home'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className='smoothscroll' href='#about'>
                            About
                        </a>
                    </li>
                    <li>
                        <a className='smoothscroll' href='#resume'>
                            Resume
                        </a>
                    </li>
                    <li>
                        <a className='smoothscroll' href='#portfolio'>
                            Works
                        </a>
                    </li>
                    {/* <li>
                        <a className="smoothscroll" href="#testimonials">
                            Testimonials
                        </a>
                    </li> */}
                    <li>
                        <a className='smoothscroll' href='#contact'>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <div className='row banner'>
                <div className='banner-text'>
                    <h1 className='responsive-headline'>
                        {resumeData.main.name}
                    </h1>
                    <h3>
                        I'm an aspiring computer scientist and electrical
                        engineer.
                        <hr />
                        Currently, I am seeking opportunities in the fields of
                        Computer Science and Electrical Engineering.
                    </h3>
                    <hr />
                    <ul className='social'>
                        {resumeData.main.socials.map((item) => (
                            <li key={item.name}>
                                {' '}
                                <a href={item.url}>
                                    <i className={item.className}></i>{' '}
                                </a>{' '}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className='scrolldown'>
                <a className='smoothscroll' href='#about'>
                    <i className='fa fa-angle-down'></i>
                </a>
            </p>
        </header>
    );
};

export default Header;
