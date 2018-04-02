import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import AppRoutes from './routes'


ReactDOM.render((
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
