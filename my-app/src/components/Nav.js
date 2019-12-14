import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom';

class Nav extends Component {

    handleRoute = text => {
        
    }


    render() {
        return (
            <header>
                <ul className="main-nav">
                    <li><NavLink to "/"></NavLink></li>
                    <li><NavLink to "/"></NavLink></li>
                    <li><NavLink to "/"></NavLink></li>
                </ul>
            </header>
        );
    }
}

export default withRouter(Nav);
