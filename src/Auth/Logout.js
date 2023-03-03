import  { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loaders/Loading";
import { DelayedRunner } from "@fullcalendar/core/internal";


export default function Logout() {
    const url = process.env.REACT_APP_API_URL;
    const token = window.sessionStorage.getItem("token");

    let navigate = useNavigate();

    const logout= () => {
        axios({
            // Endpoint to send files
            url: url + "/logout",
            method: "get",
            headers: {
                Authorization: "Bearer " + token,
                Accept: "Application/json",
            },

        })
            // Handle the response from backend here
            .then((response) => {
                
                window.sessionStorage.clear();
                navigate("/login");
            })

            // Catch errors if any
            .catch((error) => {
            });
    };

    
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }else{
            logout();
        }
    }, []);

    return (
        <container className="flex  h-screen w-full justify-center  align-middle items-center flex-row">
            <h1 className="pr-4 text-3xl">Loading...</h1><Loading width="35px" height="35px" color="black"/>
        </container>
    );
}
