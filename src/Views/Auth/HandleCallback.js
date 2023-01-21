import axios from "axios";
import { useLocation, useParams } from "react-router";

export default function HandleCallback() {
	const { driver } = useParams();
	const location = useLocation();
	const url =
		process.env.REACT_APP_API_URL +
		`/api/auth/${driver}/callback${location.search}`;
	const options = {
		method: "GET",
		url: url,
		headers: {
			Accept: "Application/json",
		},
	};
	axios(options).then(function (response) {
		console.log(response);
	});
}
