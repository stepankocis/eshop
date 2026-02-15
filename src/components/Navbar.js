import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    Obchod More (nebo tak neco)
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    'nav-link' + (isActive ? ' active' : '')
                                }
                            >
                               Domov
                            </NavLink>
                        </li>
                    </ul>

                    <Link
                        className="btn btn-outline-light position-relative"
                        to="/cart"
                    >
                        🛒 Cart
                        {cartCount > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;