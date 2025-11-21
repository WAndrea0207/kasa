import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="/LOGO.svg" alt="Kasa logo" />
            </div>
            <nav className="header__nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                    end
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    );
}