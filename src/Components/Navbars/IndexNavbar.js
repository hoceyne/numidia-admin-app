/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

export default function Navbar(props) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link
							to="/"
							className="text-blueGray-700 text-xl font-bold leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap capitalize"
						>
							
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
									className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									to={"/about"}
									>
									About
								</Link>
							</li>{" "}
							<li className="flex items-center">
								<Link
									className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									to={"/contact"}
									>
									Contact
								</Link>
							</li>
							<li className="flex items-center">
								<a
									className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
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
									className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
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
								<button
									className="bg-lightBlue-500  active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
									type="button"
								>
									Join Now
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}