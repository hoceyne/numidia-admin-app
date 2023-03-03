import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import FooterSmall from "../Components/Footers/FooterSmall";
import AuthNavbar from "../Components/Navbars/AuthNavbar";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";

export default function Register() {
    const { plan } = useParams();
    const url = process.env.REACT_APP_API_URL;
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [role, setRole] = React.useState("student");
    const [gender, setGender] = React.useState("male");
    const [phone_number, setPhoneNumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password_confirmation, setPasswordConfirmation] = React.useState("");
    const [step, setStep] = React.useState(true);
    let navigate = useNavigate();

    const registerProvider = (email, provider, id) => {
        let data = {
            email,
            id,
        };
        axios({
            // Endpoint to send files
            url: url + "/auth/" + provider + "/register",
            method: "POST",
            headers: {
                Accept: "Application/json",
            },

            // Attaching the form data
            data: data,
        })
            // Handle the response from backend here
            .then(async (response) => {
                const base64Response = await fetch(`data:image/${response.data.profile_picture.extension};base64,${response.data.profile_picture.content}`);
                const blob = await base64Response.blob();
                const imgUrl =  window.URL.createObjectURL(blob);
                
                window.sessionStorage.setItem("profile_picture_url",imgUrl);
                window.sessionStorage.setItem("token", response.data.token);
                window.sessionStorage.setItem("user_id", response.data.id);
                window.sessionStorage.setItem("role", response.data.role);
                if (plan && role != "parent") {
                    await axios({
                        // Endpoint to send files
                        url: url + "/clients/choose/plan",
                        method: "POST",
                        headers: {
                            Authorization: "Bearer " + response.data.token,
                            Accept: "Application/json",
                        },

                        // Attaching the form data
                        data: {
                            plan_id: plan,
                            role: "client",
                            client_id: response.data.user.id,
                        },
                    })
                        // Handle the response from backend here
                        .then((response) => {
                            Swal.fire({
                                title: "Go to dashboard",
                                text: "You are successfuly signed up .",
                                icon: "success",
            
                                iconColor: "#3dc00c",
                            }).then(async () => {
                                
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
                                text: error.message,
                                icon: "error",
                            });
                        });
                }

                
            })

            // Catch errors if any
            .catch((error) => {
                Swal.fire({
                    title: "Bad credentials!",
                    text: error.message,
                    icon: "error",
                });
            });
    };

    const next = (event) => {
        event.preventDefault();
        setStep(false);
    };
    const back = (event) => {
        event.preventDefault();
        setStep(true);
    };

    const register = (event) => {
        event.preventDefault();

        let data = {
            email: email,
            name: name,
            role: role,
            gender: gender,
            phone_number: phone_number,
            password_confirmation: password_confirmation,
            password: password,
        };
        axios({
            // Endpoint to send files
            url: url + "/register",
            method: "POST",
            headers: {
                Accept: "Application/json",
            },

            // Attaching the form data
            data: data,
        })
            // Handle the response from backend here
            .then(async (response) => {
                const base64Response = await fetch(`data:image/${response.data.profile_picture.extension};base64,${response.data.profile_picture.content}`);
                    const blob = await base64Response.blob();
                    const imgUrl =  window.URL.createObjectURL(blob);
                    
                    window.sessionStorage.setItem("profile_picture_url",imgUrl);
                window.sessionStorage.setItem(
                    "token",
                    response.data.token
                );
                window.sessionStorage.setItem(
                    "user_id",
                    response.data.id
                );
                window.sessionStorage.setItem(
                    "role",
                    response.data.role
                );
                if (plan && role != "parent") {
                    await axios({
                        // Endpoint to send files
                        url: url + "/clients/choose/plan",
                        method: "POST",
                        headers: {
                            Accept: "Application/json",

                            Authorization: "Bearer " + response.data.token,
                        },

                        // Attaching the form data
                        data: {
                            plan_id: plan,
                            role: "client",
                            client_id: response.data.id,
                        },
                    })
                        // Handle the response from backend here
                        .then((response) => {
                            
                        })

                        // Catch errors if any
                        .catch((error) => {
                            Swal.fire({
                                title: "Bad credentials!",
                                text: error.message,
                                icon: "error",
                            });
                        });
                }
                Swal.fire({
                    title: "Go to dashboard",
                    text: "You are successfuly signed up .",
                    icon: "success",

                    iconColor: "#3dc00c",
                }).then(async () => {
                    
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
                    text: error.message,
                    icon: "error",
                });
            });
    };
    useEffect(() => {
        console.log(plan);

        const token = window.sessionStorage.getItem("token");
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
                                                    Sign up with
                                                </h6>
                                            </div>
                                            <div className=" flex flex-row text-center justify-center ">
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
                                                    scope="user_gender "
                                                    onResolve={({ data }) => {
                                                        let email = data.email;
                                                        let id = data.id;
                                                        let provider =
                                                            "facebook";
                                                        registerProvider(
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
                                                            .REACT_APP_GOOGLE_APP_ID
                                                    }
                                                    scope="https://www.googleapis.com/auth/user.gender.read"
                                                    discoveryDocs="claims_supported"
                                                    access_type="offline"
                                                    onResolve={({ data }) => {
                                                        let email = data.email;
                                                        let id = data.id;
                                                        let provider = "google";
                                                        registerProvider(
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
                                            <form>
                                                {step ? (
                                                    <div className="transition-all">
                                                        <div className="relative w-full mb-3">
                                                            <label className="block capitalize text-blueGray-600 text-xs font-bold mb-2">
                                                                Sign Up As
                                                            </label>
                                                            <select
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                default="student"
                                                                onChange={(
                                                                    event
                                                                ) => {
                                                                    setRole(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    );
                                                                }}
                                                            >
                                                                <option value="student">
                                                                    Student
                                                                </option>
                                                                <option value="parent">
                                                                    Parent
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div className="relative w-full mb-3">
                                                            <label className="block capitalize text-blueGray-600 text-xs font-bold mb-2">
                                                                Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="Name"
                                                                value={name}
                                                                onChange={(
                                                                    event
                                                                ) => {
                                                                    setName(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="relative w-full mb-3 flex flex-row">
                                                            <div className=" w-1/2 mr-2">
                                                                <label className="block capitalize text-blueGray-600 text-xs font-bold mb-2">
                                                                    Phone Number
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    value={
                                                                        phone_number
                                                                    }
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                    placeholder="Phone Number"
                                                                    onChange={(
                                                                        event
                                                                    ) => {
                                                                        setPhoneNumber(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        );
                                                                    }}
                                                                />
                                                            </div>

                                                            <div className=" w-1/2 ml-2">
                                                                <label className="block capitalize text-blueGray-600 text-xs font-bold mb-2">
                                                                    Gender
                                                                </label>
                                                                <select
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                    default="male"
                                                                    onChange={(
                                                                        event
                                                                    ) => {
                                                                        setGender(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        );
                                                                    }}
                                                                >
                                                                    <option value="male">
                                                                        Male
                                                                    </option>
                                                                    <option value="female">
                                                                        Female
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="text-center mt-6 ">
                                                            <button
                                                                className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold capitalize px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-1/2 ease-linear transition-all duration-150"
                                                                type="button"
                                                                onClick={(
                                                                    event
                                                                ) =>
                                                                    next(event)
                                                                }
                                                            >
                                                                Next
                                                                <i className="fa-solid fa-arrow-right ml-2"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="transition-all">
                                                        <div className="relative w-full mb-3">
                                                            <label className="block capitalize text-blueGray-600 text-xs font-bold mb-2">
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                value={email}
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="Email"
                                                                onChange={(
                                                                    event
                                                                ) => {
                                                                    setEmail(
                                                                        event
                                                                            .target
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
                                                                value={password}
                                                                onChange={(
                                                                    event
                                                                ) => {
                                                                    setPassword(
                                                                        event
                                                                            .target
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
                                                                Confirmation
                                                            </label>
                                                            <input
                                                                type="password"
                                                                value={
                                                                    password_confirmation
                                                                }
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                placeholder="Password Confirmation"
                                                                onChange={(
                                                                    event
                                                                ) => {
                                                                    setPasswordConfirmation(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    );
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="text-center mt-6 flex flex-row">
                                                            <button
                                                                className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold capitalize px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-1 w-1/2 ease-linear transition-all duration-150"
                                                                type="button"
                                                                onClick={(
                                                                    event
                                                                ) =>
                                                                    back(event)
                                                                }
                                                            >
                                                                <i className="fa-solid fa-arrow-left mr-3"></i>
                                                                Back
                                                            </button>
                                                            <button
                                                                className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold capitalize px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 w-1/2 ease-linear transition-all duration-150"
                                                                type="button"
                                                                onClick={(
                                                                    event
                                                                ) =>
                                                                    register(
                                                                        event
                                                                    )
                                                                }
                                                            >
                                                                Sign Up
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                <small>
                                                    By signing up you agree to
                                                    the Numidia{" "}
                                                    <Link
                                                        className="text-blue-600 underline"
                                                        to="/contact.us"
                                                    >
                                                        Terms of Service
                                                    </Link>{" "}
                                                    and Numidia{" "}
                                                    <Link
                                                        className="text-blue-600 underline"
                                                        to="/contact.us"
                                                    >
                                                        Privacy Policy
                                                    </Link>
                                                    .
                                                </small>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mt-6 relative">
                                        <div className="w-full text-center">
                                            <Link
                                                to="/login"
                                                className="text-slate-200"
                                            >
                                                <small>
                                                    Already signed up? sign in
                                                    Now.
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
