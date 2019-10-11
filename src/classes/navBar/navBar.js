import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component{
    render(){
        return(
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/character"}>Character</Link>
                </li>
                <li>
                    <Link to="/spells">Spell List</Link>
                </li>
                <li>
                    <Link to="/converter">Converter</Link>
                </li>
            </ul>
        );
    }
}