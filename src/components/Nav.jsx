import React from "react";
import "./Nav.css";
const Nav = () => {
    return (
        <>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                        New
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Link
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Link
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Disabled
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Nav;
