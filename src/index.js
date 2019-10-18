import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import NavBar from './classes/navBar/navBar.js';
import Home from './classes/home.js';
import SpellList from './classes/spellList.js';
import SpellSpecific from './classes/spellSpecific.js';
import Converter from './classes/converter.js';
import Character from './classes/character/character.js';

import Login from './classes/user/login';

const routing = (
    <Router>
        <NavBar />

        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/home" component={Home} /> */}
            <Route path="/spells" component={SpellList} />
            <Route path="/spellSpec/:spellId" component={SpellSpecific} />
            <Route path="/converter" component={Converter} />
            <Route path="/character" component={Character} />
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();