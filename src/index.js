import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import NavBarOld from './classes/navBar/navBar.js';
import NavBar from './classes/navBar.js';
import Home from './classes/home.js';
import SpellList from './classes/spellList.js';
import Converter from './classes/converter.js';

const routing = (
    <Router>
{/*         <NavBarOld /> */}
        <NavBar />

        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/home" component={Home} /> */}
            <Route path="/spellList" component={SpellList} />
            <Route path="/converter" component={Converter} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();