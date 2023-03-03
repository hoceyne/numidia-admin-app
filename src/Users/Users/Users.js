import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Navbars/Sidebar";
import AdminNavbar from "../../Components/Navbars/AdminNavbar";
import FooterAdmin from "../../Components/Footers/FooterAdmin";
import HeaderStats from "../../Components/Headers/HeaderStats";
import CardUsers from "./CardUsers";

// components

export default function Users() {
    const [users, setUsers] = React.useState([]);
    const token = window.sessionStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;
    const role = window.sessionStorage.getItem("role");
    const navigate = useNavigate();

    const getUsers = async () => {
        let options = {
            method: "get",
            url: url + "/admin/users/",
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
                setUsers(response.data);
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
            getUsers();
        }
    }, []);
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}

                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-4">
                            <CardUsers
                                getUsers={getUsers}
                                color={"dark"}
                                title="All Users"
                                data={users}
                            />
                        </div>
                    </div>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}
