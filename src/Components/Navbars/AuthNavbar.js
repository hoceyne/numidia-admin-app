/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";


export default function AuthNavbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link
							to="/"
							className="text-white text-xl font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap capitalize cursor-pointer"
						>
							<img
								className=" h-auto shadow hover:shadow-lg mr-3 scale-125 bg-white rounded-full w-8 "
								src={require("../../assets/img/logo/numidia-school-logo.png")}
							></img>
							Numidia
						</Link>
						<button
							className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
							(navbarOpen ? " block" : " hidden")
						}
						id="example-navbar-warning"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="flex items-center">
								<Link
									className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									to={"/about"}
								>
									About
								</Link>
							</li>{" "}
							<li className="flex items-center">
								<Link
									className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									to={"/contact"}
								>
									Contact
								</Link>
							</li>
							<li className="flex items-center">
								<a
									className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									href="https://web.facebook.com/Numidia.academy"
									target="_blank"
								>
									<i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
									<span className="lg:hidden inline-block ml-2">
										Share
									</span>
								</a>
							</li>
							<li className="flex items-center">
								<a
									className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									href="https://www.instagram.com/numidia_school/"
									target="_blank"
								>
									<i className="text-blueGray-400 fab fa-instagram text-lg leading-lg " />
									<span className="lg:hidden inline-block ml-2">
										Post
									</span>
								</a>
							</li>
							<li className="flex items-center">
								<Link
									className="bg-white  active:bg-slate-300 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
									to={"/register"}
								>
									Join Now
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
