import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import a from '../components/a';
import b from '../components/b';

export default () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={a} />
					<Route path="/b" component={b} />
				</Switch>
			</Router>
		</>
	);
};
