import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Profile from "./Pages/Profile/Profile";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import Register from "./Auth/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Teachers from "./Users/Teachers/Teachers";
import Students from "./Users/Students/Students";
import Plans from "./Management/Plans/Plans";
import Groups from "./Management/Groups/Groups";

import Parents from "./Users/Parents/Parents";
import Levels from "./Management/Levels/Levels";
import Users from "./Users/Users/Users";
import ForgotPassword from "./Auth/ForgotPassword";
import ResentEmailVerification from "./Auth/ResentEmailVerification";
import EmailVerification from "./Auth/EmailVerification";
import Index from "./Pages/Index";
import Error404 from "./Pages/Errors/Error404";
import Planing from "./Management/Planing";
import Notification from "./Management/Notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
const app_url = process.env.REACT_APP_URL;
root.render(
    <BrowserRouter basename={app_url}>
        <Routes>
            <Route path="/about.us" exact element={<AboutUs />} />
            <Route path="/contact.us" exact element={<ContactUs />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/logout" exact element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/:plan" exact element={<Register />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/teachers" exact element={<Teachers />} />
            <Route path="/plans" exact element={<Plans />} />
            <Route path="/students" exact element={<Students />} />
            <Route path="/parents" exact element={<Parents />} />
            <Route path="/levels" exact element={<Levels />} />
            <Route path="/users" exact element={<Users />} />
            <Route path="/groups" exact element={<Groups />} />

            <Route path="/planing" exact element={<Planing />} />
            <Route path="/notifications" exact element={<Notification />} />

            <Route path="/forgot.password" exact element={<ForgotPassword />} />
            <Route
                path="/email.resent.code"
                exact
                element={<ResentEmailVerification />}
            />
            <Route path="/email.verify" exact element={<EmailVerification />} />
            <Route path="/" exact element={<Index />} />
            {/* Error pages */}
            <Route path="/404" exact element={<Error404 />} />
            <Route path="/500" exact element={<Error404 />} />
            <Route path="/401" exact element={<Error404 />} />

            {/* Page Not Found */}
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    </BrowserRouter>
);
