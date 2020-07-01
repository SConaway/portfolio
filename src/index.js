import React from 'react';
import {render} from 'react-snapshot';

import './index.css';
import './css/default.css';
import './css/layout.css';
import './css/media-queries.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
