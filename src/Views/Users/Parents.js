import React from "react";

// components

export default function Parents() {
	const [parents, setParents] = React.useState([]);
	const [color, setColor] = React.useState("light");
	const getParents = async () => {
		let url = process.env.API_URL + "/parents/";
		let options = {
			method: "get",
			url: url,
			headers: {
				Authorization: "Bearer " + token,
				Accept: "Application/json",
			},
		};
		let response = await axios(options);
		setParents(response.data);
	};
	return (
		<>
			<div className="flex flex-wrap mt-4">
				<div className="w-full mb-12 px-4">
					<div
						className={
							"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
							(color === "light"
								? "bg-white"
								: "bg-lightBlue-900 text-white")
						}
					>
						<div className="rounded-t mb-0 px-4 py-3 border-0">
							<div className="flex flex-wrap items-center">
								<div className="relative w-full px-4 max-w-full flex-grow flex-1">
									<h3
										className={
											"font-semibold text-lg " +
											(color === "light"
												? "text-blueGray-700"
												: "text-white")
										}
									>
										Card Tables
									</h3>
								</div>
							</div>
						</div>
						<div className="block w-full overflow-x-auto">
							<table className="items-center w-full bg-transparent border-collapse">
								<thead>
									<tr>
										<th
											className={
												"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
												(color === "light"
													? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
													: "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
											}
										>
											parent
										</th>
										<th
											className={
												"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
												(color === "light"
													? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
													: "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
											}
										>
											Email
										</th>
										<th
											className={
												"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
												(color === "light"
													? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
													: "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
											}
										>
											Role
										</th>
										<th
											className={
												"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
												(color === "light"
													? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
													: "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
											}
										>
											Completion
										</th>
										<th
											className={
												"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
												(color === "light"
													? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
													: "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
											}
										></th>
									</tr>
								</thead>
								<tbody>
									{parents.data.map((parent, id) => {
										return (
											<tr>
												<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
													<img
														src={parent.profile_picture_src}
														className="h-12 w-12 bg-white rounded-full border"
														alt="..."
													></img>{" "}
													<span
														className={
															"ml-3 font-bold " +
															+(color === "light"
																? "text-blueGray-600"
																: "text-white")
														}
													>
														{parent.name}
													</span>
												</th>
												<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
													{parent.email}
												</td>
												<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
													{parent.role}
												</td>
												<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
													<div className="flex items-center">
														<span className="mr-2">60%</span>
														<div className="relative w-full">
															<div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
																<div
																	style={{ width: "60%" }}
																	className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
																></div>
															</div>
														</div>
													</div>
												</td>
												<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
													edit delete
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
