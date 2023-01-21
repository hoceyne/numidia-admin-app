/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "../Components/Navbars/IndexNavbar.js";
import Footer from "../Components/Footers/Footer.js";
import IndexPlans from "./Plans/IndexPlans.js";
import MapExample from "../Components/Maps/MapExample.js";

export default function Index() {
	return (
		<>
			<IndexNavbar />
			<section className="header overflow-hidden relative pt-16 items-center flex h-screen max-h-860-px">
				<div className="container mx-auto items-center flex flex-wrap">
					<div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
						<div className="pt-32 sm:pt-0">
							<h2 className="font-semibold text-4xl text-blueGray-600">
								Numidia The Place to Learn
							</h2>
							<p className="mt-4 text-lg leading-relaxed text-blueGray-500">
								Numidia is composed of three departements Numidia
								school, profession and academy where you learn in any
								education system whatever your level is of any major for
								a reasonable prices, choose the plan you are comfor
								with.
							</p>
							<div className="mt-12">
								<Link
									to={"/about"}
									target="_blank"
									className="get-started  font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 upercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>
									Explore more
								</Link>
							</div>
						</div>
					</div>
				</div>
				<img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("../assets/img/pattern_react.png")}
          alt="..."
        />
			</section>
			<section className="block relative mt-5 mb-20">
				<div className="container mx-auto">
					<div className="flex flex-wrap justify-center ">
						<div className="w-full md:w-1/2 px-12 md:px-4 ml-auto mr-auto flex flex-col justify-center items-center">
							<h3 className="text-3xl mb-2 font-semibold leading-normal">
								Get it Now on Play Store
							</h3>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 w-full">
								You can get our application on your andriod phone now.
								Just click the button bellow
							</p>
							<p className="text-lg font-light leading-relaxed mt-0 mb-4 w-full">
								Numidia app is simple app for phone users it's facilate
								and speed up the registeration process.
							</p>
							<a href="https://www.playstore.com" target="_blank" className="p-0 mt-5">
								<img
									className="align-middle border-none w-48 h-auto rounded-lg shadow hover:shadow-lg"
									src={require("../assets/img/google-play-badge.png")}
								/>
							</a>
						</div>

						<div className="w-full md:w-1/2 px-4 mr-auto ml-auto  scale-125 overflow-visible">
							<img
								src={require("../assets/img/numidia-andriod-app.png")}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="block relative z-1 bg-blueGray-600">
				<div className="justify-center text-center flex flex-wrap mt-5 mb-5">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl">
							Our Numidia Departements
						</h2>
						<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
							Numidia is composed of three departements Numidia school,
							profession and academy where you learn in any education
							system whatever your level is of any major for a reasonable
							prices, what are waiting choose your major and REGISTER
							NOW.
						</p>
					</div>
				</div>
				<div className="container mx-auto">
					<div className="justify-center flex flex-wrap">
						<div className="w-full lg:w-12/12 px-4">
							<div className="flex flex-wrap">
								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										Numidia School
									</h5>
									<a href="#school">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src={require("../assets/img/school.jpg")}
											/>
										</div>
									</a>
								</div>

								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										Numidia Academy
									</h5>
									<a href="#academy">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src={require("../assets/img/academy.jpg")}
											/>
										</div>
									</a>
								</div>

								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										Numidia Profession
									</h5>
									<a href="#profession">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src={require("../assets/img/profession.jpg")}
											/>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
				id="school"
			>
				<div className="container mx-auto">
					<div className="-mx-4 flex flex-wrap">
						<div className="w-full px-4">
							<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
								
								<h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
								Numidia School
								</h2>
								<p className="text-body-color text-base">
									Numidia School is the place for your academic
									excellence
								</p>
							</div>
						</div>
					</div>
					<IndexPlans departement={"school"} />
				</div>
			</section>
			<section
				className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
				id="academy"
			>
				<div className="container mx-auto">
					<div className="-mx-4 flex flex-wrap">
						<div className="w-full px-4">
							<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
								
								<h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
								Numidia Academy
								</h2>
								<p className="text-body-color text-base">
									Numidia Academy is the place for your academic
									excellence
								</p>
							</div>
						</div>
					</div>
					<IndexPlans departement={"academy"} />
				</div>
			</section>
			<section
				className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
				id="profession"
			>
				<div className="container mx-auto">
					<div className="-mx-4 flex flex-wrap">
						<div className="w-full px-4">
							<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
								
								<h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
								Numidia Profession
								</h2>
								<p className="text-body-color text-base">
									Numidia Profession is the place for your academic
									excellence
								</p>
							</div>
						</div>
					</div>
					<IndexPlans departement={"profession"} />
				</div>
			</section>
			<section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
				<div className="container mx-auto">
					<MapExample />
				</div>
			</section>
			<Footer />
		</>
	);
}
