import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CardStats from "../Cards/CardStats.js";

export default function HeaderStats() {
    const [users, setUsers] = React.useState(0);
    const [clients, setClients] = React.useState(0);
    const [budget, setBudget] = useState("0.00 DA");
    const [teachers, setTeahcers] = React.useState(0);
    const token = window.sessionStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;
    const role = window.sessionStorage.getItem("role");


    const loadStats = () => {
        axios({
            // Endpoint to send files
            url: url + "/admin/stats",
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
                setBudget(response.data.budget);
                setUsers(response.data.users
                    );
                setClients(response.data.clients);
                setTeahcers(response.data.teachers);
            })

            // Catch errors if any
            .catch((error) => {
                Swal.fire({
                    title: "Server fall down",
                    text: "Can't get statistics",
                    icon: "error",
                });
            });
    };
    useEffect(() => {
        const token = window.sessionStorage.getItem("token");
        if (token) {
            loadStats();
        }
    }, []);
    return (
        <>
            {/* Header */}
            <div className="relative bg-sky-600 md:pt-32 pb-32 pt-12">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <div>
                        {/* Card stats */}
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 xl:w-1/4 px-4">
                                <CardStats
                                    statSubtitle="Budget"
                                    statTitle={budget}
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="Since last month"
                                    statIconName="far fa-chart-bar"
                                    statIconColor="bg-red-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-1/4 px-4">
                                <CardStats
                                    statSubtitle="USERS"
                                    statTitle={users}
                                    statPercentColor="text-red-500"
                                    statDescripiron="Since last month"
                                    statIconName="fas fa-chart-pie"
                                    statIconColor="bg-orange-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-1/4 px-4">
                                <CardStats
                                    statSubtitle="CLIENTS"
                                    statTitle={clients}
                                    statPercentColor="text-orange-500"
                                    statDescripiron="Since last month"
                                    statIconName="fas fa-users"
                                    statIconColor="bg-pink-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <CardStats
                                    statSubtitle="Teachers"
                                    statTitle={teachers}
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="Since last month"
                                    statIconName="fa-solid fa-chalkboard-user"
                                    statIconColor="bg-sky-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
