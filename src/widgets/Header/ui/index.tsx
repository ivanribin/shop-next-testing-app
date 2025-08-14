import {type ReactElement} from 'react';

import {NavigationBar} from '@features/NavigationBar';

import './style.css';

const Header = (): ReactElement => {
    return (
        <div className="header">
            <NavigationBar />
        </div>
    );
};

export default Header;
