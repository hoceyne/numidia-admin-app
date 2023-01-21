import React from "react";
import { Link } from "react-router-dom";

export default function FooterSmall() {
	return (
		<>
			<footer className="absolute w-full bottom-0 bg-slate-800 pb-5">
				<div className="container mx-auto px-4">
					<hr className="mb-6 border-b-1 border-slate-600" />
					<div className="flex flex-wrap items-center md:justify-between justify-center">
						<div className="w-full md:w-4/12 px-4">
							<div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
								Copyright © {new Date().getFullYear()}{" "}
								<a
									href="https://www.creative-tim.com?ref=nr-footer-small"
									className="text-white hover:text-slate-300 text-sm font-semibold py-1"
								>
									Souala El-Houssine
								</a>
							</div>
						</div>
						<div className="w-full md:w-8/12 px-4">
							<ul className="flex flex-wrap list-none md:justify-end  justify-center">
								<li>
									<Link
										to="/about.us"
										className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to="contact.us"
										className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
									>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
