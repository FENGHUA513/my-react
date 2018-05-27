import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './route'
import registerServiceWorker from '@/registerServiceWorker';

ReactDOM.render(<RouteConfig />, document.getElementById('root'));
registerServiceWorker();