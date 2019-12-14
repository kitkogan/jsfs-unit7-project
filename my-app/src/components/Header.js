import React from 'react';

import Search from './Search';
import Nav from './Nav';

const Header = props => (
    <div>
        <Search onSearch={props.onSearch} />
        <Nav onNavClick={props.onNavClick} />
    </div>
);

export default Header;