import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import logos from "../assets/logo.png";
import logos from "../assets/rose.jpg";


export default function Header() {

    return (
        <header className="shadow sticky z-50 top-0" id='no-print'>
        <nav className="bg-gradient-to-r from-[#83919D] via-[#C6BEB4] to-[#9d978f] border-gray-200 px-4 lg:px-6 py-2.5">
               <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logos}
                            className="mr-5 h-16 w-16 rounded-full"
                            alt="Logo"
                        />
                    </Link>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 pr-[25%]"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                `py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about"
                                            className={({ isActive }) =>
                                                `py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/Mycard"
                                            className={({ isActive }) =>
                                                `py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                           My Card
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contact"
                                            className={({ isActive }) =>
                                                `py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink
                                            to="/termcondition"
                                            className={({ isActive }) =>
                                                `py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            Term and Condition
                                        </NavLink>
                                    </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
