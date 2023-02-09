import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import Login from "./Views/Auth/Login.js";
import Register from "./Views/Auth/Register.js";
import Students from "./Views/Users/Students.js";
import Teachers from "./Views/Users/Teachers.js";
import Profile from "./Views/Profile.js";
import Index from "./Views/Index.js";
import Error404 from "./Views/Errors/Error404";
import ResentEmailVerification from "./Views/Auth/ResentEmailVerification";
import EmailVerification from "./Views/Auth/EmailVerification";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import AboutUs from "./Views/AboutUs.js";
import ContactUs from "./Views/ContactUs";
import Dashboard from "./Views/Dashboard";
import Users from "./Views/Users/Users";
import Departements from "./Views/Branches/Departements";
import Plans from "./Views/Plans/Plans";
import Logout from "./Views/Auth/Logout";

const root = ReactDOM.createRoot(document.getElementById("root"));
const app_url = process.env.REACT_APP_URL;
root.render(
	<BrowserRouter basename={app_url}>
		<Routes >
			<Route path="/about.us" exact element={<AboutUs />} />
			<Route path="/contact.us" exact element={<ContactUs />} />
			<Route path="/profile" exact element={<Profile />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/logout" exact element={<Logout />} />
			<Route path="/register" exact element={<Register />} />
			<Route path="/dashboard" exact element={<Dashboard />} />
			<Route path="/teachers" exact element={<Teachers />} />
			<Route path="/students" exact element={<Students />} />
			<Route path="/plans" exact element={<Plans />} />
			<Route path="/departements" exact element={<Departements />} />

			<Route path="/users" exact element={<Users />} />
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
