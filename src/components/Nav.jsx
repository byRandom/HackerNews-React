import React from "react";
import "./Nav.css";
const Nav = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        New
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Past
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Comments
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Jobs
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Nav;
