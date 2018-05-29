import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './route'
import {Provider} from 'react-redux';
import store from '@/store/home/store';
import '@/assets/style/toast.less'
import registerServiceWorker from '@/registerServiceWorker';

ReactDOM.render (
	<Provider store={store}>
		<RouteConfig />
	</Provider>, document.getElementById('root'),
);
registerServiceWorker();