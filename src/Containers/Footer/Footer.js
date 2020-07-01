import React from 'react';

import resumeData from './../../resumeData.json';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {resumeData.main.socials.map((item) => (
                            <li key={item.name}>
                                <a href={item.url}>
                                    <i className={item.className}></i>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="copyright">
                        <li>
                            &copy; Copyright {new Date().getFullYear()} Steven
                            Conaway
                        </li>
                        <li>
                            Design by{' '}
                            <a
                                title="Styleshout"
                                href="http://www.styleshout.com/"
                            >
                                Styleshout
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="go-top">
                    <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#home"
                    >
                        <i className="fa fa-angle-up"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
