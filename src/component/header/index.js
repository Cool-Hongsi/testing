import React from 'react';
import './style.scss';
import Logo from '../logo/Logo.jpg';

const Header = (props) => {
    return(
        <header className="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
};

export default Header;