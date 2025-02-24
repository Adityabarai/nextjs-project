"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const login = () => {
	const router = useRouter();
	const navigate = (page) => {
		router.push("/login/"+page);
	};
	return (
		<div>
			<h1>Login Page</h1>
			<br></br>
			<Link href="/">Go to Home Page</Link>
			<br></br>
			<br></br>
			<button onClick={() => navigate("loginteacher")}>
				Go to Teacher Login Page
			</button>
			<br></br>
			<br></br>
			<button onClick={() => navigate("loginstudent")}>
				Go to Student Login Page
			</button>
		</div>
	);
};
export default login;
