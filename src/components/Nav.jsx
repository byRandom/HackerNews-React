import React from "react";
import "./Nav.css";
const Nav = () => {
    return (
        <>
            <ul className="fixed z-10 top-0 flex justify-center w-full rounded-t-none rounded-lg p-2 bg-orange-500  ">
                <li className="">
                    <a
                        className="hover:text-white hover:bg-black p-2 rounded-md "
                        aria-current="page"
                        href="#"
                    >
                        New
                    </a>
                </li>
                <li className="">
                    <a
                        className="hover:text-white hover:bg-black rounded-md p-2"
                        href="#"
                    >
                        Past
                    </a>
                </li>
                <li className="">
                    <a
                        className="hover:text-white hover:bg-black rounded-md p-2"
                        href="#"
                    >
                        Comments
                    </a>
                </li>
                <li className="">
                    <a
                        className="hover:text-white hover:bg-black p-2 rounded-md"
                        href="#"
                    >
                        Jobs
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Nav;
