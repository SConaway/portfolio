import React from 'react';

import resumeData from './../../resumeData.json';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
            <div className='row'>
                <div className='twelve columns'>
                    <ul className='social-links'>
                        {resumeData.main.socials.map((item) => (
                            <li key={item.name}>
                                <a href={item.url}>
                                    <FontAwesomeIcon icon={item.className} />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className='copyright'>
                        <li>
                            &copy; Copyright {new Date().getFullYear()} Steven
                            Conaway
                        </li>
                        <li>
                            <span>
                                Original Design by{' '}
                                <a
                                    title='Styleshout'
                                    href='http://www.styleshout.com/'
                                >
                                    Styleshout
                                </a>
                            </span>
                        </li>
                        <li>
                            <span>
                                Converted to ReactJS by{' '}
                                <a
                                    title='Tim Baker'
                                    href='https://github.com/tbakerx/react-resume-template'
                                >
                                    Tim Baker
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div id='go-top'>
                    <a
                        className='smoothscroll'
                        title='Back to Top'
                        href='#home'
                    >
                        <FontAwesomeIcon icon='angle-up' />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
