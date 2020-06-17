import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Toolbar = () => {

    const btnRef = useRef();

    useEffect(() => {

        const handleClick = (event) => {
            if((btnRef !== event.target) && (!btnRef.current.className.includes("collapsed"))) {
                document.getElementById("toggleBtn").click();
            }
        }

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [btnRef])

    return(
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"} data-toggle={"collapse"} data-target={".navbar-collapse.show"} >
            <NavLink className={"navbar-brand"} to={"/"}>Herolo Weather Task</NavLink>
            <button className={"navbar-toggler collapsed"} id={"toggleBtn"} ref={btnRef} type={"button"} data-toggle={"collapse"} data-target={"#navbarNav"} 
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