import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebars/Sidebar";
import AdminNavbar from "../../Components/Navbars/AdminNavbar";
import CardDepartements from "../../Components/Cards/CardDepartements";
import FooterAdmin from "../../Components/Footers/FooterAdmin";
import HeaderStats from "../../Components/Headers/HeaderStats";

// components

export default function Departements() {
    const [departements, setDepartement] = React.useState([]);
    const token = window.sessionStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;
    const role = window.sessionStorage.getItem("role");
    const navigate = useNavigate();

    const getDepartements =  () => {
        let options = {
            method: "get",
            url: url+ "/admin/departements/",
            params: {
				role: role
			  },
            headers: {
                Authorization: "Bearer " + token,
                Accept: "Application/json",
            },
        };
        axios(options).then((response) => {
            
        setDepartement(response.data);
        })

        // Catch errors if any
        .catch((error) => {
            if(error.response.status===401){
                Swal.fire({
                    title: "Please sign in",
                    text: "You are not signed in",
                    icon: "error",
                }).then(()=>{
                    window.sessionStorage.clear();
                    navigate('/login');
                });
            }
        });
    };
	useEffect(() => {
        if (token) {
            getDepartements();
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
                            <CardDepartements
                                getTeacher = {getDepartements}
                                color={"dark"}
                                title="All departements"
                                data={departements}
                            />
                        </div>
                    </div>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}
