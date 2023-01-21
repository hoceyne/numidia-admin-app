import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FooterSmall from "../../Components/Footers/FooterSmall";
import AuthNavbar from "../../Components/Navbars/AuthNavbar";

export default function Login() {
	const [google_url, setGoogleUrl] = useState("");
	const [facebook_url, setFacebookURL] = useState("");

	useEffect(() => {
		let url = process.env.REACT_APP_API_URL + "/api/auth/google";
		let options = {
			method: "GET",
			url: url,
			headers: {
				Accept: "Application/json",
			},
		};
		axios(options).then(function (response) {
			setGoogleUrl(response.data.url);
		});

		url = process.env.REACT_APP_API_URL + "/api/auth/facebook";
		options = {
			method: "GET",
			url: url,
			headers: {
				Accept: "Application/json",
			},
		};
		axios(options).then(function (response) {
			setFacebookURL(response.data.url);
		});
	});
	return (
		<>
			<>
				<AuthNavbar />
				<main>
					<section className="relative w-full h-screen py-40 min-h-screen ">
						<div
							className="absolute top-0 w-full h-screen bg-slate-800 bg-no-repeat bg-cover "
							style={{
								backgroundImage:
									"url(" +
									require("../../assets/img/register_bg_2.png") +
									")",
							}}
						></div>
						<div className="container mx-auto px-4">
							<div className="flex content-center  justify-center">
								<div className="w-full lg:w-4/12 px-4">
									<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
										<div className="rounded-t mb-0 px-6 py-6">
											<div className="text-center mb-3">
												<h6 className="text-blueGray-500 text-sm font-bold">
													Sign in with
												</h6>
											</div>
											<div className="btn-wrapper text-center">
												<a
													className="bg-white active:bg-blueGray-50 text-slate-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
													href={facebook_url}
												>
													<img
														alt="..."
														className="w-5 mr-1"
														src={require("../../assets/img/facebook.png")}
													/>
													Facebook
												</a>
												<a
													className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
													href={google_url}
												>
													<img
														alt="..."
														className="w-5 mr-1"
														src={
															require("../../assets/img/google.svg")
																.default
														}
													/>
													Google
												</a>
											</div>
											<hr className="mt-6 border-b-1 border-slate-300" />
										</div>
										<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
											<div className="text-slate-400 text-center mb-3 font-bold">
												<small>Or sign in with credentials</small>
											</div>
											<form>
												<div className="relative w-full mb-3">
													<label
														className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
														htmlFor="grid-password"
													>
														Email
													</label>
													<input
														type="email"
														className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
														placeholder="Email"
													/>
												</div>

												<div className="relative w-full mb-3">
													<label
														className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
														htmlFor="grid-password"
													>
														Password
													</label>
													<input
														type="password"
														className="border-0 px-3 py-3 placeholder-blueGray-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
														placeholder="Password"
													/>
												</div>

												<div className="text-center mt-6">
													<button
														className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
														type="button"
													>
														Sign In
													</button>
												</div>
											</form>
										</div>
									</div>
									<div className="flex flex-wrap mt-6 relative">
										<div className="w-1/2">
											<Link
												to={"/forgot.password"}
												className="text-slate-200"
											>
												<small>Forgot password?</small>
											</Link>
										</div>
										<div className="w-1/2 text-right">
											<Link
												to="/auth/register"
												className="text-slate-200"
											>
												<small>Create new account</small>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<FooterSmall />
					</section>
				</main>
			</>
		</>
	);
}
