import React from 'react';
import { NavLink } from 'react-router-dom';

const Toolbar = ( props ) => {
    return(
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
            <NavLink className={"navbar-brand"} to={"/"}>Herolo Weather Task</NavLink>
            <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"} data-target={"#navbarNav"} 
                aria-controls={"navbarNav"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
                <span className={"navbar-toggler-icon"}></span>
            </button>
            <div className={"collapse navbar-collapse"} id={"navbarNav"}>
                <ul className={"nav navbar-nav ml-auto"}>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/"} exact>Home</NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={"/favorites"}>Favorites</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Toolbar;