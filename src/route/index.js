import React from 'react';
import {Route, Switch, BrowserRouter, HashRouter} from 'react-router-dom'
import Home from '@/pages/home'
import Login from '@/pages/login'
import None from '@/pages/404'

export default class RouteConfig extends React.Component {
	render() {
		return (
			<HashRouter>
			 	<Switch>
					<Route path='/' exact component={Home}></Route>
					<Route path='/login' component={Login}></Route>
					<Route path='*' component={None}></Route>
				</Switch>
			</HashRouter>
		)
	}
}

