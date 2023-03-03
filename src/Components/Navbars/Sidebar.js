/*eslint-disable*/
import React from "react";
import { Link, useLocation } from "react-router-dom";

import NotificationDropdown from "../Dropdowns/NotificationDropdown.js";
import UserDropdown from "../Dropdowns/UserDropdown.js";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");

    let location = useLocation();
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() =>
                            setCollapseShow("bg-white m-2 py-3 px-6")
                        }
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link
                        to="/"
                        className="text-slate-700 text-xl font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap capitalize cursor-pointer"
                    >
                        <img
                            className="w-10 h-auto shadow hover:shadow-lg mr-2 scale-125 rounded-full"
                            src={require("../../assets/img/logo/numidia-school-logo.png")}
                        ></img>
                        Numidia
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <NotificationDropdown />
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        to="/"
                                        className="text-slate-700 text-xl font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap capitalize cursor-pointer"
                                    >
                                        <img
                                            className="w-8 h-auto shadow hover:shadow-lg mr-2 scale-125 rounded-full "
                                            src={require("../../assets/img/logo/numidia-school-logo.png")}
                                        ></img>
										Numidia
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() =>
                                            setCollapseShow("hidden")
                                        }
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Main pages
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/dashboard"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/dashboard"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/dashboard"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    Dashboard
                                </Link>
                            </li>
                            
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/planing"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/planing"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/planing"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    Planing
                                </Link>
                            </li>
                            
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            User Management
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            
                            
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/users"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/users"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/users"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    Users
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/students"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/students"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/planing"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    My Students
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/clients"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/clients"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/clients"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    Clients
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/parents"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/parents"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/parents"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    Parents
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/teachers"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/teachers"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/teachers"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    Teachers
                                </Link>
                            </li>
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Departement Management
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            
                            
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/levels"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/levels"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/levels"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    Levels
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/groups"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/groups"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/groups"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    Groups
                                </Link>
                            </li>
                            
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/plans"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/plans"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/plans"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    Plans
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (location.pathname == "/sessions"
                                            ? "text-sky-500 hover:text-sky-600"
                                            : "text-slate-700 hover:text-slate-500")
                                    }
                                    to="/sessions"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (location.pathname ==
                                            "/sessions"
                                                ? "opacity-75"
                                                : "text-slate-300")
                                        }
                                    ></i>{" "}
                                    Sessions
                                </Link>
                            </li>
                            
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                    </div>
                </div>
            </nav>
        </>
    );
}
