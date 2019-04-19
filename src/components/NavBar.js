import React from "react";
import {NavLink} from "react-router-dom";
import logo128 from "../img/logo/png/green/primary-700-128.png";

const NavBar = props => {
    return (
        <header>
            <div className="nav-wrap">
                <div className="img-container">
                   <img alt="I'll Serve Soup logo" src={logo128} />
                </div>
                <a href="/" className="nodecoration">
                    <div className="header-text">
                        <h1>I'll Serve Soup</h1>
                    </div>
                </a>
                    <nav>
                    <NavLink className="decor" activeClassName="selected-nav" exact to="/" onClick={props.clearSearch}>View Inventory</NavLink>
                    <NavLink className="decor" activeClassName="selected-nav" exact to="/add" onClick={props.clearSearch}>Add Inventory</NavLink>
                    <NavLink className="decor-outline" exact to="/"  onClick={props.logOut}>Log Out</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;
