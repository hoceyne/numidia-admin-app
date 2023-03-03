import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

// components

export default function LevelForm({
    action,
    data,
    getLevels,
    className,
    hide,
}) {
    const token = window.sessionStorage.getItem("token");
    const navigate = useNavigate();
    
    const base_url = process.env.REACT_APP_API_URL;
    const url =
        action === "add"
            ? process.env.REACT_APP_API_URL + "/admin/levels/create"
            : process.env.REACT_APP_API_URL +
              "/admin/levels/update";
    const method = action === "add" ? "post" : "put";
    const role = window.sessionStorage.getItem("role");
    const [specialty, setSpecialty] = React.useState("");
    const [education, setEducation] = React.useState("");
    const [year, setYear] = React.useState("");
    const [branch, setBranch] = React.useState("");
    const [branchs, setBranchs] = React.useState([]);

    const call = () => {
        axios({
            // Endpoint to send files
            url: url,
            method: method,
            data: {
                role: role,
                specialty,
                education,
                year,
                branch_id:branch,
            },
            headers: {
                Accept: "Application/json",
                Authorization: "Bearer " + token,
            },
        })
            // Handle the response from backend here
            .then((response) => {
                getLevels();
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

    const getBranchs = () => {
        axios({
            // Endpoint to send files
            url: base_url+ "/admin/branchs",
            method: "get",
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
                setBranchs(response.data)
            })

            // Catch errors if any
            .catch((error) => {
                if(error.response.status===401){
                    Swal.fire({
                        title: "Please sign in",
                        text: "You are not signed in",
                        icon: "error",
                    }).then(()=>{
                        window.sessionStorage.clear();
                        navigate('/login');
                    });
                }
            });
    };

    useEffect(() => {
        getBranchs();
        if (action === "add") {
            setSpecialty("");
            setEducation("");
            setYear("");
        } else {
            setSpecialty(data.specialty);
            setEducation(data.name);
            setYear(data.year);
        }
    }, []);
    return (
        <div className={className}>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-slate-700 text-xl font-bold capitalize">
                            {action} Level
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
                            Levels Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        education
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Education"
                                        onChange={(event) => {
                                            setEducation(event.target.value);
                                        }}
                                        value={education}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        specialty
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Specialty"
                                        onChange={(event) => {
                                            setSpecialty(event.target.value);
                                        }}
                                        value={specialty}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Year
                                    </label>
                                    <input
                                        type="number"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Year"
                                        onChange={(event) => {
                                            setYear(event.target.value);
                                        }}
                                        value={year}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        branch
                                    </label>
                                    <select
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 capitalize"
                                        default=""
                                        onChange={(event) => {
                                            setBranch(event.target.value);
                                        }}
                                    >
                                        <option value="">Choose A branch</option>
                                        {branchs.map((branch,id)=>{
                                            return(
                                                <option  key={id} value={branch.id} className="capitalize">{branch.name}</option>

                                            );
                                        })}
                                   
                                    </select>
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
