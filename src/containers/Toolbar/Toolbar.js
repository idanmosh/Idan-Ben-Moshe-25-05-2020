import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Toolbar = ( props ) => {

    useEffect(() => {
        $(document).ready(function () {
            $(document).click(function (event) {
                var click = $(event.target);
                var _open = $(".navbar-collapse").hasClass("show");
                if (_open === true && !click.hasClass("navbar-toggler")) {
                    $(".navbar-toggler").click();
                }
            });
        });
    }, [])

    return(
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"} data-toggle={"collapse"} data-target={".navbar-collapse.show"} >
            <NavLink className={"navbar-brand"} to={"/"}>Herolo Weather Task</NavLink>
            <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"} data-target={"#navbarNav"} 
                aria-controls={"navbarNav"} aria-expanded={false} aria-label={"Toggle navigation"}>
                <span className={"navbar-toggler-icon"}></span>
            </button>
            <div className={"collapse navbar-collapse"} id={"navbarNav"}>
                <ul className={"nav navbar-nav ml-auto"}>
                    <li className={"nav-item"} >
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