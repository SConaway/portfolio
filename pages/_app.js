import './../styles/default.css';
import './../styles/layout.css';
import './../styles/media-queries.css';

import React from 'react';
// import App, {Container} from 'next/app';

import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import {library} from '@fortawesome/fontawesome-svg-core';
import {faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faAngleDown,
    faAngleUp,
    faDownload,
    faLink,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faLinkedin,
    faGithub,
    faTwitter,
    faEnvelope,
    faAngleDown,
    faAngleUp,
    faDownload,
    faLink,
    faCheck,
);

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />;
}

export default MyApp;
