import React from 'react';
import { NavLink } from 'react-router-dom';
class Nav = props => (

    <div>
         <nav className="main-nav">
                <ul>
                    <li onClick={props.onNavClick}><NavLink to="/nav/lightning">Lightning</NavLink></li>
                    <li onClick={props.onNavClick}><NavLink to="/nav/crystals">Crystals</NavLink></li>
                    <li onClick={props.onNavClick}><NavLink to="/nav/gnomes"></NavLink>Gnomes</li>
                </ul>
         </nav>
    </div>
);

export default Nav;
