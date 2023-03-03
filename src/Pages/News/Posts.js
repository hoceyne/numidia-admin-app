import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import PostForm from "./PostForm";
import moment from "moment/moment";

// components

export default function Posts() {
    const [posts, setPosts] = React.useState([]);
    const token = window.sessionStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;
    const role = window.sessionStorage.getItem("role");
    const user_id = window.sessionStorage.getItem("user_id");

    const navigate = useNavigate();

    const [form, setForm] = useState(false);
    const [post, setPost] = React.useState({});
    const [method, setMethod] = useState("add");

    const showForm = (action, data) => {
        setMethod(action);
        setPost(data);
        setForm(true);
    };
    const hide = () => {
        setForm(false);
    };
    const destroy = (id) => {
        axios({
            // Endpoint to send files
            url: url + "/posts/" + id + "/delete",
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

    const getPosts = async () => {
        let options = {
            method: "get",
            url: url + "/posts",
            params: {
                role: role,
            },
            headers: {
                Authorization: "Bearer " + token,
                Accept: "Application/json",
            },
        };
        axios(options)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    Swal.fire({
                        title: "Please sign in",
                        text: "You are not signed in",
                        icon: "error",
                    }).then(() => {
                        window.sessionStorage.clear();
                        navigate("/login");
                    });
                } else if (error.response.status === 403) {
                    Swal.fire({
                        title: "Please verify your email",
                        text: "You are not verified press ok to verify your email",
                        icon: "error",
                    }).then(() => {
                        navigate("/email.verify");
                    });
                }
            });
    };
    useEffect(() => {
        if (token) {
            getPosts();
        }
    }, []);
    return (
        <>
            {form ? (
                <PostForm
                    action={method}
                    data={post}
                    className=""
                    hide={hide}
                    getPosts={getPosts}
                ></PostForm>
            ) : (
                ""
            )}
            <div className="flex flex-wrap items-center p-3 justify-between">
                <h1 className={"font-semibold text-3xl text-slate-700"}>
                    What's New
                </h1>
                {role === "admin" || role === "teacher" ? (
                    <Link
                        className="bg-blue-500 text-white active:bg-indigo-600 text-xs font-bold uppercase p-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                        role={"button"}
                        onClick={() => {
                            showForm("add");
                        }}
                    >
                        <i class="fa-solid fa-plus"></i>
                    </Link>
                ) : (
                    ""
                )}
            </div>

            {posts.map((post, id) => {
                const imgUrl = `data:image/${post.author.profile_picture.extension};base64,${post.author.profile_picture.content}`;

                return (
                    <div
                        className={
                            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white mt-5 p-5"
                        }
                    >
                        <div className="flex flex-row justify-between">
                            <div className=" text-3xl  font-bold font-mono">
                                {post.title}
                            </div>
                            <div>
                                {user_id == post.user_id ? (
                                    <>
                                        <Link
                                            className="bg-blue-500 text-white active:bg-indigo-600 text-xs font-bold uppercase p-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150 hover:text-slate-700"
                                            role={"button"}
                                            onClick={() => {
                                                showForm("edit", post);
                                            }}
                                        >
                                            <i class="fa-solid fa-edit"></i>
                                        </Link>
                                        <Link
                                            className="bg-blue-500 mx-2 text-white active:bg-indigo-600 text-xs font-bold uppercase p-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150 hover:text-red-600"
                                            role={"button"}
                                            onClick={() => {
                                                destroy(post.id);
                                            }}
                                        >
                                            <i class="fa-solid fa-trash"></i>
                                        </Link>
                                    </>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div>{post.content}</div>
                        <hr className="mt-10 w-full" />
                        <div className="mt-5 flex flex-row ">
                            <img
                                className=" w-12 h-12 rounded-full mr-5"
                                src={imgUrl}
                            ></img>
                            <div>
                                <div className="font-bold">
                                    {post.author.name}
                                </div>
                                <div>
                                    {moment(post.updated_at).format(
                                        "Do-MM-YYYY  LT"
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
