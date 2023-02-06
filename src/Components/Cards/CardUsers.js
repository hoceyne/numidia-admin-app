import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import UserForm from "../Forms/UserForm";

export default function CardUsers({ color, title, data, getUsers }) {
    const token = window.sessionStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;
    const role = window.sessionStorage.getItem("role");
    const [form, setForm] = useState(false);
    const [user, setUser] = React.useState({});
    const [method, setMethod] = useState("add");

    const showForm = (action, data) => {
        setMethod(action);
        setUser(data);
        setForm(true);
    };
    const hide = () => {
        setForm(false);
    };
    const destroy = (id) => {
        axios({
            // Endpoint to send files
            url: url + "/admin/users/" + id + "/delete",
            method: "delete",
            params: {
                role: role,
            },
            headers: {
                Accept: "Application/json",
                Authorization: "Bearer " + token,
            },
        })
            // Handle the response from backend here
            .then((response) => {
                getUsers();
            })

            // Catch errors if any
            .catch((error) => {
                Swal.fire({
                    title: "Server fall down",
                    text: "Can't get data",
                    icon: "error",
                });
            });
    };

    return (
        <>
            {form ? (
                <UserForm
                    action={method}
                    data={user}
                    className=""
                    hide={hide}
                    getUsers={getUsers}
                ></UserForm>
            ) : (
                ""
            )}
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-sky-900 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light"
                                        ? "text-slate-700"
                                        : "text-white")
                                }
                            >
                                {title}
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <Link
                                className="bg-blue-500 text-white active:bg-indigo-600 text-xs font-bold uppercase p-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                role={"button"}
                                onClick={() => {
                                    showForm("add");
                                }}
                            >
                                <i class="fa-solid fa-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-sky-800 text-sky-300 border-sky-700")
                                    }
                                >
                                    Name
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-sky-800 text-sky-300 border-sky-700")
                                    }
                                >
                                    Email
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-sky-800 text-sky-300 border-sky-700")
                                    }
                                >
                                    Phone Number
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-sky-800 text-sky-300 border-sky-700")
                                    }
                                >
                                    Gender
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-sky-800 text-sky-300 border-sky-700")
                                    }
                                >
                                    Role
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-sky-800 text-sky-300 border-sky-700")
                                    }
                                ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user, id) => {
                                return (
                                    <tr key={id}>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <span
                                                className={
                                                    "ml-3 font-bold " +
                                                    +(color === "light"
                                                        ? "text-slate-600"
                                                        : "text-white")
                                                }
                                            >
                                                {user.name}
                                            </span>
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {user.email}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {user.phone_number}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {user.gender}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {user.role}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            <Link
                                                role={"button"}
                                                onClick={() => {
                                                    showForm("edit", user);
                                                }}
                                                className="p-2 mr-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            >
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </Link>
                                            <Link
                                                role={"button"}
                                                onClick={() => destroy(user.id)}
                                                d
                                                className="p-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            >
                                                <i class="fa-solid fa-trash"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

CardUsers.defaultProps = {
    color: "light",
};

CardUsers.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
