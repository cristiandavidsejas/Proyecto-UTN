import React from "react";
import header from '../../styles/header.css';

const Header = (props) => {
    return (
            <header>
                <div className="holder">
                    <img src="img/Banner.png" width="100%"/>
                    <h1 id="titulo">Languages Academy</h1>
                </div>
            </header>
    );
}

export default Header;