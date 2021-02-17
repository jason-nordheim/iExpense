import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as M from "materialize-css/dist/js/materialize";

export const NavBar = () => {
  const [sideNav, setSideNav] = useState({});
  const sideNavRef = useRef(null);
  useEffect(() => setSideNav(M.Sidenav.init(sideNavRef.current)), []);
  const handleNavLinkClick = (event) => {
    if (sideNav) sideNav.close();
  };
  return (
    <>
      <ul ref={sideNavRef} id="slide-out" className="sidenav sidenav-fixed">
        <li>
          <div className="user-view"></div>
        </li>
        <li>
          <Link
            to="/"
            about="Homepage"
            className="waves-effect"
            onClick={handleNavLinkClick}
          >
            <i className="material-icons">account_balance</i>Expense Me
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link
            className="waves-effect"
            to="/profile"
            onClick={handleNavLinkClick}
          >
            Profile
          </Link>
        </li>
      </ul>
      <div className="right">
        <a
          href="#!"
          data-target="slide-out"
          className="sidenav-trigger btn-floating purple darken-4"
        >
          <i className="material-icons em-menu-icon ">menu</i>
        </a>
      </div>
    </>
  );
};
