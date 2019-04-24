import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom'
import asyncComponent from '../../utils/asyncComponent';
import Index from './index'
import Detail from './detail'
const Detail = asyncComponent(() => import('./detail'))

export default class RouteConfig extends React.Component {
	render() {
		return (
			<HashRouter>
			 	<Switch>
					<Route path='/' exact component={Index}></Route>
					<Route path='/detail' component={Detail}></Route>
				</Switch>
			</HashRouter>
		)
	}
}
