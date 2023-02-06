import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// components

export default function IndexPlans({ departement }) {
	const [plans, setPlans] = React.useState([]);
	const token = window.sessionStorage.getItem("token");
	const getPlans = async () => {
		let url = process.env.API_URL + "/plans/" + departement;
		let options = {
			method: "get",
			url: url,
			headers: {
				Authorization: "Bearer " + token,
				Accept: "Application/json",
			},
		};
		let response = await axios(options);
		setPlans(response.data);
	};
	return (
		<>
			<div className="-mx-4 flex flex-nowrap justify-center overflow-scroll scrollbar-hide ">
				{plans.map((plan, id) => {
					return (
						<div className="w-full px-4 md:w-1/2 lg:w-1/3">
							<div className="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
								<h2 className="text-dark mb-5 text-[42px] font-bold">
									${plan.price}
									<span className="text-body-color text-base font-medium">
										{" "}
										/ month
									</span>
								</h2>
								<p className="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base">
									By {plan.teacher.name} of {plan.teacher.module}
								</p>
								<div className="mb-7">
									{plan.benefits.map((benefit, id) => {
										return (
											<p className="text-body-color mb-1 text-base leading-loose">
												{benefit}
											</p>
										);
									})}
								</div>
								<Link
									to={"/register/plan/"+plan.id}
									className="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white"
								>
									Register Now
								</Link>
								<div>
									<span className="absolute right-0 top-7 z-[-1]">
										<svg
											width={77}
											height={172}
											viewBox="0 0 77 172"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx={86}
												cy={86}
												r={86}
												fill="url(#paint0_linear)"
											/>
											<defs>
												<linearGradient
													id="paint0_linear"
													x1={86}
													y1={0}
													x2={86}
													y2={172}
													gradientUnits="userSpaceOnUse"
												>
													<stop
														stopColor="#3056D3"
														stopOpacity="0.09"
													/>
													<stop
														offset={1}
														stopColor="#C4C4C4"
														stopOpacity={0}
													/>
												</linearGradient>
											</defs>
										</svg>
									</span>
									<span className="absolute right-4 top-4 z-[-1]">
										<svg
											width={41}
											height={89}
											viewBox="0 0 41 89"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="38.9138"
												cy="87.4849"
												r="1.42021"
												transform="rotate(180 38.9138 87.4849)"
												fill="#3056D3"
											/>
											<circle
												cx="38.9138"
												cy="74.9871"
												r="1.42021"
												transform="rotate(180 38.9138 74.9871)"
												fill="#3056D3"
											/>
											<circle
												cx="38.9138"
												cy="62.4892"
												r="1.42021"
												transform="rotate(180 38.9138 62.4892)"
												fill="#3056D3"
											/>
											<circle
												cx="38.9138"
												cy="38.3457"
												r="1.42021"
												transform="rotate(180 38.9138 38.3457)"
												fill="#3056D3"
											/>
											<circle
												cx="38.9138"
												cy="13.634"
												r="1.42021"
												transform="rotate(180 38.9138 13.634)"
												fill="#3056D3"
											/>
											<circle
												cx="38.9138"
												cy="50.2754"
												r="1.42021"
												transform="rotate(180 38.9138 50.2754)"
												fill="#3056D3"
											/>
											<circle
												cx="38.9138"
												cy="26.1319"
												r="1.42021"
												transform="rotate(180 38.9138 26.1319)"
												fill="#3056D3"
											/>
											<circle
												cx="38.9138"
												cy="1.42021"
												r="1.42021"
												transform="rotate(180 38.9138 1.42021)"
												fill="#3056D3"
											/>
											<circle
												cx="26.4157"
												cy="87.4849"
												r="1.42021"
												transform="rotate(180 26.4157 87.4849)"
												fill="#3056D3"
											/>
											<circle
												cx="26.4157"
												cy="74.9871"
												r="1.42021"
												transform="rotate(180 26.4157 74.9871)"
												fill="#3056D3"
											/>
											<circle
												cx="26.4157"
												cy="62.4892"
												r="1.42021"
												transform="rotate(180 26.4157 62.4892)"
												fill="#3056D3"
											/>
											<circle
												cx="26.4157"
												cy="38.3457"
												r="1.42021"
												transform="rotate(180 26.4157 38.3457)"
												fill="#3056D3"
											/>
											<circle
												cx="26.4157"
												cy="13.634"
												r="1.42021"
												transform="rotate(180 26.4157 13.634)"
												fill="#3056D3"
											/>
											<circle
												cx="26.4157"
												cy="50.2754"
												r="1.42021"
												transform="rotate(180 26.4157 50.2754)"
												fill="#3056D3"
											/>
											<circle
												cx="26.4157"
												cy="26.1319"
												r="1.42021"
												transform="rotate(180 26.4157 26.1319)"
												fill="#3056D3"
											/>
											<circle
												cx="26.4157"
												cy="1.4202"
												r="1.42021"
												transform="rotate(180 26.4157 1.4202)"
												fill="#3056D3"
											/>
											<circle
												cx="13.9177"
												cy="87.4849"
												r="1.42021"
												transform="rotate(180 13.9177 87.4849)"
												fill="#3056D3"
											/>
											<circle
												cx="13.9177"
												cy="74.9871"
												r="1.42021"
												transform="rotate(180 13.9177 74.9871)"
												fill="#3056D3"
											/>
											<circle
												cx="13.9177"
												cy="62.4892"
												r="1.42021"
												transform="rotate(180 13.9177 62.4892)"
												fill="#3056D3"
											/>
											<circle
												cx="13.9177"
												cy="38.3457"
												r="1.42021"
												transform="rotate(180 13.9177 38.3457)"
												fill="#3056D3"
											/>
											<circle
												cx="13.9177"
												cy="13.634"
												r="1.42021"
												transform="rotate(180 13.9177 13.634)"
												fill="#3056D3"
											/>
											<circle
												cx="13.9177"
												cy="50.2754"
												r="1.42021"
												transform="rotate(180 13.9177 50.2754)"
												fill="#3056D3"
											/>
											<circle
												cx="13.9177"
												cy="26.1319"
												r="1.42021"
												transform="rotate(180 13.9177 26.1319)"
												fill="#3056D3"
											/>
											<circle
												cx="13.9177"
												cy="1.42019"
												r="1.42021"
												transform="rotate(180 13.9177 1.42019)"
												fill="#3056D3"
											/>
											<circle
												cx="1.41963"
												cy="87.4849"
												r="1.42021"
												transform="rotate(180 1.41963 87.4849)"
												fill="#3056D3"
											/>
											<circle
												cx="1.41963"
												cy="74.9871"
												r="1.42021"
												transform="rotate(180 1.41963 74.9871)"
												fill="#3056D3"
											/>
											<circle
												cx="1.41963"
												cy="62.4892"
												r="1.42021"
												transform="rotate(180 1.41963 62.4892)"
												fill="#3056D3"
											/>
											<circle
												cx="1.41963"
												cy="38.3457"
												r="1.42021"
												transform="rotate(180 1.41963 38.3457)"
												fill="#3056D3"
											/>
											<circle
												cx="1.41963"
												cy="13.634"
												r="1.42021"
												transform="rotate(180 1.41963 13.634)"
												fill="#3056D3"
											/>
											<circle
												cx="1.41963"
												cy="50.2754"
												r="1.42021"
												transform="rotate(180 1.41963 50.2754)"
												fill="#3056D3"
											/>
											<circle
												cx="1.41963"
												cy="26.1319"
												r="1.42021"
												transform="rotate(180 1.41963 26.1319)"
												fill="#3056D3"
											/>
											<circle
												cx="1.41963"
												cy="1.4202"
												r="1.42021"
												transform="rotate(180 1.41963 1.4202)"
												fill="#3056D3"
											/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
