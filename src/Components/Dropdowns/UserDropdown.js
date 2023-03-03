import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserDropdown = () => {
    // dropdown props
    const [dropDown, setDropdown] = useState(false);
    const showDropDown = () => {
        setDropdown(!dropDown);
    };
    return (
        <>
            <div className="dropdown relative">
                
            <div
                    className={
                        (dropDown ? "block " : "hidden ") +
                        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 dropdown-menu absolute mt-14 top-0"
                    }
                >
                    <Link
                        to="/profile"
                        className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                    >
                        Profile
                    </Link>
                    <Link
                        to={"/profile/settings"}
                        className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                    >
                        Settings
                    </Link>
                    <div className="h-0 my-2 border border-solid border-slate-100" />
                    <Link
                        to={"/logout"}
                        className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                    >
                        Logout
                    </Link>
                </div>
                <a
                    className="text-slate-500 block  cursor-pointer dropdown-toggle"
                    onClick={() => showDropDown()}
                >
                    <div className="items-center flex ">
                        <span className="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full ">
                            <img
                                alt="..."
                                className="w-full rounded-full align-middle border-none shadow-lg"
                                src={window.sessionStorage.getItem(
                                    "profile_picture_url"
                                )}
                            />
                        </span>
                    </div>
                </a>
            </div>
        </>
    );
};

export default UserDropdown;
