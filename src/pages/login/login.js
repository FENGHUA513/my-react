import React from 'react';
import ReactDOM from 'react-dom';
import Login from './index'
import loginStore from '@/store/login/loginStore'
import registerServiceWorker from '@/registerServiceWorker';

let store = new loginStore()
ReactDOM.render(<Login store={store} />, document.getElementById('root'));
registerServiceWorker();