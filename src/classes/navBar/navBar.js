import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

export default class NavBarOld extends React.Component{
    render(){
        return(
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to="/spellList">Spell List</Link>
                </li>
                <li>
                    <Link to="/converter">Converter</Link>
                </li>
            </ul>

            // <div>


            //     <p>Home</p>
            //     <p>Character</p>
            //     <p>Spell List</p>
            //     <p>Converter</p>
            //     <button>
            //         <Link to="/spellList"></Link>
            //         Button
            //     </button>
            // </div>
        )
    }
}