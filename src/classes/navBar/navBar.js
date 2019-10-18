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

                { this._checkLogin() }
            </ul>
        );
    }

    _checkLogin = () =>{
        const authKey = localStorage.getItem('authKey');

        if(! authKey){
            return(
                <li style={{float: 'right'}}>
                    <Link to="/login">Login</Link>
                </li>
            );
        }
        else{
            return(
                <li style={{ float: 'right' }}>
                    <Link to="/home" onClick={() => alert('test')}>Logout</Link>
                </li>
            )
        }
    }
}