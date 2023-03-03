import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import DashboardAdmin from "./DashboardAdmin";
import DashboardStudent from "./DashboardStudent";
import DashboardParent from "./DashboardParent";
import DashboardTeacher from "./DashboardTeacher";

export default function Dashboard() {
    const url = process.env.REACT_APP_API_URL;
    const token = window.sessionStorage.getItem("token");

    const role = window.sessionStorage.getItem("role");

    let navigate = useNavigate();

    useEffect(() => {}, []);

    return (
        <>
            {role == "student" ? (
                <DashboardStudent></DashboardStudent>
            ) : role === "parent" ? (
                <DashboardParent></DashboardParent>
            ) : role === "teacher" ? (
                <DashboardTeacher></DashboardTeacher>
            ) : role === "admin" ? (
                <DashboardAdmin></DashboardAdmin>
            ) : (
                ""
            )}
        </>
    );
}
