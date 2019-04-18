import React from "react";
import {NavLink} from "react-router-dom";
import soup from "../img/soup.png"

const NavBar = props => {
    return (
        <header>
            <div className="nav-wrap">
                <div className="img-container">
                    <img alt="soup" src={soup} />
                </div>
                <div className="header-text">
                    <h1>I'll Serve Soup</h1>
                </div>
                <nav>
                    <NavLink className="decor" activeClassName="selected-nav" exact to="/" onClick={props.clearSearch}>View Inventory</NavLink>
                    <NavLink className="decor" activeClassName="selected-nav" exact to="/add" onClick={props.clearSearch}>Add Inventory</NavLink>
                    <a href="/" className="nodecoration"><button className="logout" onClick={props.logOut}>Log Out</button></a>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;