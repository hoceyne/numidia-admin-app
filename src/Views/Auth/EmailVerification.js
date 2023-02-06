import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import FooterSmall from "../../Components/Footers/FooterSmall";
import AuthNavbar from "../../Components/Navbars/AuthNavbar";
import ReactCodeInput from "react-code-input";

export default function EmailVerification() {
    const url = process.env.REACT_APP_API_URL;
    const [email, setEmail] = React.useState("");
    const [code, setCode] = React.useState("");
    const token = window.sessionStorage.getItem("token");

    let navigate = useNavigate();

    const verify = () => {
        let data = {
            email,
            code,
        };
        axios({
            // Endpoint to send files
            url: url + "/email/verify",
            method: "POST",
            headers: {
                Accept: "Application/json",
                Authorization: "Bearer " + token,
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
                }).then(async () => {});
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

    const resend = () => {
        let data = {
            email,
        };
        axios({
            // Endpoint to send files
            url: url + "/email/verify",
            method: "POST",
            headers: {
                Accept: "Application/json",
                Authorization: "Bearer " + token,
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
                }).then(async () => {});
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
        const token = window.sessionStorage.getItem("token");
        if (!token) {
            // navigate("/login");
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
                                    require("../../assets/img/register_bg_2.png") +
                                    ")",
                            }}
                        ></div>
                        <div className="container mx-auto px-4">
                            <div className="flex content-center  justify-center">
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                                        <div className="flex-auto px-4 lg:px-10 py-10">
                                            <div className="text-center mb-3">
                                                <h6 className=" text-sm font-bold">
                                                    Verify Your Email
                                                </h6>
                                            </div>
                                            <div className="text-slate-600 text-center mb-3">
                                                <small>
                                                    If you didn't receive an
                                                    email please click here to{" "}
                                                    <Link
                                                        className="text-blue-600 underline"
                                                        to="/email.resent.code"
                                                    >
                                                        resend verification code
                                                    </Link>
                                                    .
                                                </small>
                                            </div>
                                            <form>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        value={email}
                                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Code
                                                    </label>

                                                    <div className="flex justify-center">
                                                        <ReactCodeInput
                                                            type="text"
                                                            value={code}
                                                            fields={6}
                                                            onChange={(
                                                                pinCode
                                                            ) => {
                                                                setCode(
                                                                    pinCode
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-center mt-6 flex flex-row">
                                                    <button
                                                        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={(event) =>
                                                            verify(event)
                                                        }
                                                    >
                                                        Verify
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mt-6 relative ">
                                        <Link
                                            className=" text-slate-200 text-center w-full"
                                            to="/dashboard"
                                        >
                                            <small>
                                                Go back to dhashboard.
                                            </small>
                                        </Link>
                                        .
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
