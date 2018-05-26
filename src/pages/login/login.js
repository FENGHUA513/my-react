import React from 'react';
import ReactDOM from 'react-dom';
import Login from './index'
import registerServiceWorker from '@/registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();