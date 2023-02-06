import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebars/Sidebar";
import AdminNavbar from "../../Components/Navbars/AdminNavbar";
import CardStudents from "../../Components/Cards/CardStudents";
import FooterAdmin from "../../Components/Footers/FooterAdmin";
import HeaderStats from "../../Components/Headers/HeaderStats";

// components

export default function Students() {
    const [students, setStudents] = React.useState([]);
    const token = window.sessionStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;
    const role = window.sessionStorage.getItem("role");
    const navigate = useNavigate();

    const getStudents = async () => {
        let options = {
            method: "get",
            url: url+ "/admin/students/",
            params: {
				role: role
			  },
            headers: {
                Authorization: "Bearer " + token,
                Accept: "Application/json",
            },
        };
        let response = await axios(options);
        setStudents(response.data);
    };
	useEffect(() => {
        if (token) {
            getStudents();
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
                            <CardStudents
                                getStudents = {getStudents}
                                color={"dark"}
                                title="All Students"
                                data={students}
                            />
                        </div>
                    </div>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}
