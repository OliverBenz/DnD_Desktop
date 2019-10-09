import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import NavBar from './classes/navBar/navBar.js';
import Home from './classes/home/home.js';
import SpellList from './classes/spellList/spellList.js';

const routing = (
    <Router>
        <NavBar />

        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/home" component={Home} /> */}
            <Route path="/spellList" component={SpellList} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
