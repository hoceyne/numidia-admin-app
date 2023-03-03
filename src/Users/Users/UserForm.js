import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

// components

export default function UserForm({
    action,
    data,
    getUsers,
    className,
    hide,
}) {
    const token = window.sessionStorage.getItem("token");
    const url =
        action === "add"
            ? process.env.REACT_APP_API_URL + "/admin/users/create"
            : process.env.REACT_APP_API_URL +
              "/admin/users/update";
    const method = action === "add" ? "post" : "put";
    const role = window.sessionStorage.getItem("role");
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [gender, setGender] = React.useState("male");
    const [phone_number, setPhoneNumber] = React.useState("");

    const call = () => {
        axios({
            // Endpoint to send files
            url: url,
            method: method,
            data: {
                role: role,
                user_role:"student",
                email,
                name,
                phone_number,
                gender,
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

    useEffect(() => {
        if (action === "add") {
            setEmail("");
            setName("");
            setGender("male");
            setPhoneNumber("");
        } else {
            setEmail(data.email);
            setName(data.name);
            setGender(data.gender);
            setPhoneNumber(data.phone_number);
        }
    }, []);
    return (
        <div className={className}>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-slate-700 text-xl font-bold capitalize">
                            {action} User
                        </h6>
                        <button
                            className=" text-white bg-red-600 active:bg-red-700 font-bold uppercase text-xs p-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                                hide();
                            }}
                        >
                            X
                        </button>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
                            User Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Name"
                                        onChange={(event) => {
                                            setName(event.target.value);
                                        }}
                                        value={name}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Email"
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                        value={email}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        default="male"
                                        onChange={(event) => {
                                            setGender(event.target.value);
                                        }}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Phone Number"
                                        onChange={(event) => {
                                            setPhoneNumber(event.target.value);
                                        }}
                                        value={phone_number}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className=" text-white bg-sky-600 active:bg-sky-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => call()}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
