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
import Header from "../../Components/Headers/Header";

export default function DashboardStudent() {
    const token = window.sessionStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;
    const role = window.sessionStorage.getItem("role");
    const navigate = useNavigate();

    useEffect(() => {
        const token = window.sessionStorage.getItem("token");
        if (token) {
        }
    }, []);
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <Header />

                <div className="px-4 md:px-10 mx-auto w-full -m-24 z-50">
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
