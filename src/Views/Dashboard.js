import Sidebar from "../Components/Sidebars/Sidebar";
import AdminNavbar from "../Components/Navbars/AdminNavbar";
import FooterAdmin from "../Components/Footers/FooterAdmin";
import HeaderStats from "../Components/Headers/HeaderStats";
import CardTable from "../Components/Cards/CardTable";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Dashboard() {
    const [clients, setClients] = React.useState([]);
    const [teachers, setTeahcers] = React.useState([]);
    const token = window.sessionStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;
    const role = window.sessionStorage.getItem("role");

    const loadClients = () => {
        
        axios({
            // Endpoint to send files
            url: url + "/admin/students",
            method: "get",
			params: {
				role: role
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
                Swal.fire({
                    title: "Server fall down",
                    text: "Can't get data",
                    icon: "error",
                });
            });
    };
    const loadTeachers = () => {
        
        axios({
            // Endpoint to send files
            url: url + "/admin/teachers",
            method: "get",
            params: {
				role: role
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
                Swal.fire({
                    title: "Server fall down",
                    text: "Can't get data",
                    icon: "error",
                });
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
                                title="Latest Registred Teachers"
                                data={teachers}
								url="/teachers"
                            />
                        </div>
                        <div className="w-full mb-12 px-4">
                            <CardTable
                                color="dark"
                                title="Latest Active Clients"
                                data={clients}
								url="/students"
                            />
                        </div>
                    </div>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}
