import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover" activeClassName="nav-active" >
                    <li>accueil</li>

                </NavLink>

                <li className="nav-portfolio">portfolio
                <ul className="nav-projects">
                        <NavLink to="/project1" activeClassName="nav-active" className="hover">
                            <li>projet 1</li>
                        </NavLink>
                        <NavLink to="/project2" activeClassName="nav-active" className="hover">
                            <li>projet 2</li>
                        </NavLink>
                        <NavLink to="/project3" activeClassName="nav-active" className="hover">
                            <li>projet 3</li>
                        </NavLink>
                        <NavLink to="/project4" activeClassName="nav-active" className="hover">
                            <li>projet 4</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink to="/contact" exact className="hover" activeClassName="nav-active" >
                    <li>contact</li>

                </NavLink>
            </ul>

        </div>
    );
};

export default Navigation;