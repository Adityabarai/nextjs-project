"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const navigate = (navbar) => {
		router.push(navbar);
	};
	const [name, setName] = useState("Aditya");
	const apple = (item) => {
		setName("Barai");
	};
	const InnerComp = () => {
		return <h1>Inner Component</h1>;
	};
	return (
		<div
		// className={styles.page}
		>
			<h1>Aditya Barai {name}</h1>
			<Link href="/login">Go to Login Page</Link>
			<br></br>
			<br></br>
			<Link href="/about">Go to About Page</Link>
			<br></br>
			<br></br>
			<button onClick={() => apple("mango")}>Click Me!</button>
			<br></br>
			<br></br>
			<button onClick={() => router.push("/login")}>Go to Login Page</button>
			<br></br>
			<br></br>
			<button onClick={() => navigate("/about")}>Go to About page</button>
			<InnerComp />
		</div>
	);
}
