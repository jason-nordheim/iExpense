import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import * as M from "materialize-css/dist/js/materialize";

export const NavBar = () => {
    const [sideNav, setSideNav] = useState({});
    const sideNavRef = useRef(null);

    useEffect(() => setSideNav(M.Sidenav.init(sideNavRef.current)), []);

    const handleNavLinkClick = (event) => {
        if (sideNav) sideNav.close();
    };

    const NavLinks = () => {
        return (
            <>
                <li>
                    <NavLink
                        to="/"
                        about="Homepage"
                        className="waves-effect"
                        onClick={handleNavLinkClick}
                    >
                        <i className={`material-icons`}>home</i>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="waves-effect"
                        to="/profile"
                        onClick={handleNavLinkClick}
                    >
                        <i className="material-icons">account_circle</i>
                        <span>Profile</span>
                    </NavLink>
                </li>
            </>
        );
    };
    return (
        <>
            <nav>
                <div className="nav-wrapper purple darken-4">
                    <NavLink
                        to="/"
                        about="Homepage"
                        className="brand-logo center"
                        onClick={handleNavLinkClick}
                    >
                        <i className="material-icons">account_balance</i>
            Expense Me
          </NavLink>
                    <div className="right">
                        <a href="#!" data-target="slide-out" className="sidenav-trigger">
                            <i className="material-icons em-menu-icon ">menu</i>
                        </a>
                    </div>
                    <ul className="right hide-on-med-and-down">
                        <NavLinks />
                    </ul>
                </div>
            </nav>
            <ul ref={sideNavRef} id="slide-out" className="sidenav">
                <li>
                    <div className="container"></div>
                </li>
                <li>
                    <div className="divider"></div>
                </li>
                <NavLinks />
            </ul>
        </>
    );
};
