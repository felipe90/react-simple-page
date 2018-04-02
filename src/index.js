import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import AppRoutes from './routes'
import './index.css';

ReactDOM.render((
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
