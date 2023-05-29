import React, {useContext, useEffect, useState} from 'react';
import "./style.scss";
import {NavLink} from "react-router-dom";
import logo from "./../../images/logo.svg";
// import {LanguageContext} from "../../Context";

const Header = ({getDark, dark}) => {
    const [scroll, setScroll] = useState(0)
    // const {setLanguage} = useContext(LanguageContext)
    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    }, [])



    return (
        <header style={{
            background: scroll > 50 ? '#150303' : '',
        }} id="header" className="header">
                <div className="header">
                    <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
                        <NavLink to="/" className=" ">
                            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo"/>
                        </NavLink>

                        <div className="flex md:order-2">
                            <button onClick={() => getDark(dark)}
                                    className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-white">
                                Dark
                            </button>
                        </div>
                        {/*<select onChange={e => setLanguage(e.target.value)} className="header--language">*/}
                        {/*    <option value="en-US">English</option>*/}
                        {/*    <option value="ru-RU">Русский</option>*/}
                        {/*</select>*/}

                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0">
                            <NavLink to={"/"}
                                     className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-red-600 md:p-0 md:dark:text-red-600"
                                     aria-current="page">Home
                            </NavLink>
                            <NavLink to={"/popular"}
                                     className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-red-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                     aria-current="page">Popular
                            </NavLink>
                            <NavLink to={"/top-rated"}
                                     className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-red-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Top Rated
                            </NavLink>
                            <NavLink to={"/now-playing"}
                                     className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-red-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Now Playing
                            </NavLink>
                        </ul>
                    </div>
                </div>
        </header>
    );
};

export default Header;