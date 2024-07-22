import React from "react";
import Logo from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar-main">
            <img src={Logo} alt="Logo" />
            <nav className="navbar">
                <ul>
                    <NavLink className="accueil" to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink className="profil" to="/">
                        <li>Profil</li>
                    </NavLink>
                    <NavLink className="reglage" to="/comingSoon">
                        <li>Réglage</li>
                    </NavLink>
                    <NavLink className="communaute" to="/comingSoon">
                        <li>Communauté</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
