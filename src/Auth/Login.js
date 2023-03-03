import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import FooterSmall from "../Components/Footers/FooterSmall";
import AuthNavbar from "../Components/Navbars/AuthNavbar";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";

export default function Login() {
    const url = process.env.REACT_APP_API_URL;
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const token = window.sessionStorage.getItem("token");

    let navigate = useNavigate();

    const loginProvider = (email, provider, id) => {
        let data = {
            email,
            id,
        };
        axios({
            // Endpoint to send files
            url: url + "/auth/" + provider + "/login",
            method: "POST",
            headers: {
                Accept: "Application/json",
            },

            // Attaching the form data
            data: data,
        })
            // Handle the response from backend here
            .then((response) => {
                Swal.fire({
                    title: "Go to dashboard",
                    text: "You are successfuly logged in .",
                    icon: "success",

                    iconColor: "#3dc00c",
                }).then(async () => {
                    window.sessionStorage.setItem("token", response.data.token);
                    window.sessionStorage.setItem(
                        "user_id",
                        response.data.user.id
                    );
                    window.sessionStorage.setItem(
                        "role",
                        response.data.user.role
                    );
                    if (response.data.verified) {
                        if (
                            response.data.role == "student" &&
                            !response.data.active
                        ) {
                            navigate("/choose.plan");
                        } else {
                            navigate("/dashboard");
                        }
                    } else {
                        navigate("/email.verify");
                    }
                });
            })

            // Catch errors if any
            .catch((error) => {
                Swal.fire({
                    title: "Bad credentials!",
                    text: "Verify your email or password.",
                    icon: "error",
                });
            });
    };

    const login = () => {
        let data = {
            email,
            password,
        };
        axios({
            // Endpoint to send files
            url: url + "/login/",
            method: "POST",
            headers: {
                Accept: "Application/json",
            },

            // Attaching the form data
            data: data,
        })
            // Handle the response from backend here
            .then((response) => {
                Swal.fire({
                    title: "Go to dashboard",
                    text: "You are successfuly logged in .",
                    icon: "success",

                    iconColor: "#3dc00c",
                }).then(async () => {
                    const imgUrl = 
                        `data:image/${response.data.profile_picture.extension};base64,${response.data.profile_picture.content}`
                    

                    window.sessionStorage.setItem(
                        "profile_picture_url",
                        imgUrl
                    );
                    window.sessionStorage.setItem("token", response.data.token);
                    window.sessionStorage.setItem("user_id", response.data.id);
                    window.sessionStorage.setItem("role", response.data.role);
                    navigate("/dashboard");
                });
            })

            // Catch errors if any
            .catch((error) => {
                Swal.fire({
                    title: "Bad credentials!",
                    text: "Verify your email or password.",
                    icon: "error",
                });
            });
    };

    useEffect(() => {
        if (token) {
            navigate("/dashboard");
        }
    }, []);

    return (
        <>
            <>
                <AuthNavbar />
                <main>
                    <section className="relative w-full h-full py-40 min-h-screen">
                        <div
                            className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-cover "
                            style={{
                                backgroundImage:
                                    "url(" +
                                    require("../assets/img/register_bg_2.png") +
                                    ")",
                            }}
                        ></div>
                        <div className="container mx-auto px-4">
                            <div className="flex content-center  justify-center">
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                                        <div className="rounded-t mb-0 px-6 py-6">
                                            <div className="text-center mb-3">
                                                <h6 className="text-blueGray-500 text-sm font-bold">
                                                    Sign in with
                                                </h6>
                                            </div>
                                            <div className=" flex flex-row text-center justify-center">
                                                <LoginSocialFacebook
                                                    appId={
                                                        process.env
                                                            .REACT_APP_FACEBOOK_APP_ID
                                                    }
                                                    fieldsProfile={
                                                        "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                                                    }
                                                    redirect_uri={
                                                        process.env
                                                            .REACT_APP_REDIRECT_URL
                                                    }
                                                    onResolve={({ data }) => {
                                                        console.log(data);
                                                        let email = data.email;
                                                        let id = data.id;
                                                        let provider =
                                                            "facebook";
                                                        loginProvider(
                                                            email,
                                                            provider,
                                                            id
                                                        );
                                                    }}
                                                    onReject={(err) => {
                                                        console.log(err);
                                                    }}
                                                >
                                                    <button className="bg-white active:bg-blueGray-50 text-slate-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 capitalize shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150">
                                                        <img
                                                            alt="..."
                                                            className="w-5 mr-1"
                                                            src={require("../assets/img/facebook.png")}
                                                        />
                                                        Facebook
                                                    </button>
                                                </LoginSocialFacebook>

                                                <LoginSocialGoogle
                                                    client_id={
                                                        process.env
                                                            .REACT_APP_GOOGLE_APP_ID
                                                    }
                                                    redirect_uri={
                                                        process.env
                                                            .REACT_APP_REDIRECT_URL
                                                    }
                                                    discoveryDocs="claims_supported"
                                                    access_type="offline"
                                                    onResolve={({ data }) => {
                                                        let email = data.email;
                                                        let id = data.id;
                                                        let provider = "google";
                                                        loginProvider(
                                                            email,
                                                            provider,
                                                            id
                                                        );
                                                    }}
                                                    onReject={(err) => {
                                                        console.log(err);
                                                    }}
                                                >
                                                    <button className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none ml-2 mb-1 capitalize shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150">
                                                        <img
                                                            alt="..."
                                                            className="w-5 mr-1"
                                                            src={
                                                                require("../assets/img/google.svg")
                                                                    .default
                                                            }
                                                        />
                                                        Google
                                                    </button>
                                                </LoginSocialGoogle>
                                            </div>
                                            <hr className="mt-6 border-b-1 border-slate-300" />
                                        </div>
                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                            <div className="text-slate-400 text-center mb-3 font-bold">
                                                <small>
                                                    Or sign in with credentials
                                                </small>
                                            </div>
                                            <form>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="Email"
                                                        onChange={(event) => {
                                                            setEmail(
                                                                event.target
                                                                    .value
                                                            );
                                                        }}
                                                    />
                                                </div>

                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="Password"
                                                        onChange={(event) => {
                                                            setPassword(
                                                                event.target
                                                                    .value
                                                            );
                                                        }}
                                                    />
                                                </div>

                                                <div className="text-center mt-6">
                                                    <button
                                                        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold capitalize px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => login()}
                                                    >
                                                        Sign In
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mt-6 relative">
                                        <div className="w-1/2">
                                            <Link
                                                to={"/forgot.password"}
                                                className="text-slate-200"
                                            >
                                                <small>Forgot password?</small>
                                            </Link>
                                        </div>
                                        <div className="w-1/2 text-right">
                                            <Link
                                                to="/register"
                                                className="text-slate-200"
                                            >
                                                <small>
                                                    Create new account.
                                                </small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FooterSmall />
                    </section>
                </main>
            </>
        </>
    );
}
