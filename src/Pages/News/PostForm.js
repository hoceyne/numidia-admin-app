import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

// components

export default function PostForm({ action, data, getPosts, className, hide }) {
    const token = window.sessionStorage.getItem("token");
    const url =
        action === "add"
            ? process.env.REACT_APP_API_URL + "/posts/create"
            : process.env.REACT_APP_API_URL + "/posts" + data.id + "/update";
    const method = action === "add" ? "post" : "put";
    const role = window.sessionStorage.getItem("role");
    const author = window.sessionStorage.getItem("user_id");
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    const call = () => {
        axios({
            // Endpoint to send files
            url: url,
            method: method,
            data: {
                role: role,
                title,
                content,
                author:author,
            },
            headers: {
                Accept: "Application/json",
                Authorization: "Bearer " + token,
            },
        })
            // Handle the response from backend here
            .then((response) => {
                getPosts();
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
            setTitle("");
            setContent("");
        } else {
            setTitle(data.title);
            setContent(data.content);
        }
    }, []);
    return (
        <div className={className}>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-slate-700 text-xl font-bold capitalize">
                            {action} Post
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
                        <div className="flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="title"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Title"
                                        onChange={(event) => {
                                            setTitle(event.target.value);
                                        }}
                                        value={title}
                                    />
                                </div>
                            </div>
                            <div className="w-full  px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Content
                                    </label>
                                    <textarea
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 h-20"
                                        placeholder="Content"
                                        onChange={(event) => {
                                            setContent(event.target.value);
                                        }}
                                        value={content}
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
