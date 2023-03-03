import Sidebar from "../../Components/Navbars/Sidebar";
import AdminNavbar from "../../Components/Navbars/AdminNavbar";
import FooterAdmin from "../../Components/Footers/FooterAdmin";
import HeaderStats from "../../Components/Headers/HeaderStats";
import CardTable from "../../Users/Users/CardUsers";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Posts from "../News/Posts";
import Planing from "../../Management/Planing";

export default function DashboardAdmin() {
    const [clients, setClients] = React.useState([]);
    const [teachers, setTeahcers] = React.useState([]);
    const token = window.sessionStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;
    const role = window.sessionStorage.getItem("role");
    const navigate = useNavigate();
    const loadClients = () => {
        axios({
            // Endpoint to send files
            url: url + "/admin/students",
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
                setClients(response.data);
            })

            // Catch errors if any
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
    const loadTeachers = () => {
        axios({
            // Endpoint to send files
            url: url + "/admin/teachers",
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
                setTeahcers(response.data);
            })

            // Catch errors if any
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
        const token = window.sessionStorage.getItem("token");
        if (token) {
            loadClients();
            loadTeachers();
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
                            <CardTable
                                title="Latest Active Clients"
                                data={clients}
                                url="/students"
                            />
                        </div>
                    </div>
                    <div className="px-2 md:px-6 mx-auto w-full ">
                        <Planing />

                        <Posts />
                    </div>

                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}
