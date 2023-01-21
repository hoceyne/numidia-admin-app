import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import Login from "./Views/Auth/Login.js";
import Register from "./Views/Auth/Register.js";
import Profile from "./Views/Profile.js";
import Index from "./Views/Index.js";
import Error404 from "./Views/Errors/Error404";
import ResentEmailVerification from "./Views/Auth/ResentEmailVerification";
import EmailVerification from "./Views/Auth/EmailVerification";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import AboutUs from "./Views/AboutUs.js";
import ContactUs from "./Views/ContactUs";
import HandleCallback from "./Views/Auth/HandleCallback";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/about.us" exact element={<AboutUs />} />
			<Route path="/Contact.us" exact element={<ContactUs />} />
			<Route path="/profile" exact element={<Profile />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/register" exact element={<Register />} />
			<Route path="/forgot.password" exact element={<ForgotPassword />} />


			<Route path="/auth/:driver/callback" element={<HandleCallback />}/>
			<Route
				path="/email.resent.code"
				exact
				element={<ResentEmailVerification />}
			/>
			<Route path="/email.verify" exact element={<EmailVerification />} />
			<Route path="/" exact element={<Index />} />

			{/* Error pages */}
			<Route path="/404" exact element={<Error404 />} />

			{/* Page Not Found */}
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	</BrowserRouter>
);
