import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import AccountDetails from "../components/AccountDetails";
import SubDetails from "../components/SubDetails";

const myLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Account() {
	const [user, setUser] = useState({});

	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			signIn(null, { callbackUrl: "/account" });
		},
	});

	useEffect(() => {
		try {
			if (session) {
				const fetchUser = async () => {
					const response = await fetch(`/api/user/${session.userId}`);
					const data = await response.json();
					setUser(data);
				};
				fetchUser();
			}
		} catch (error) {
			console.log(error);
		}
	}, [session]);

	if (status === "loading") {
		return (
			<Layout title="Loading... | Account">
				<h1>Loading...</h1>
			</Layout>
		);
	}

	return (
		<Layout title={`${session.user.name} | Account`}>
			<div className="flex flex-col sm:flex-row justify-items-center m-auto my-10 max-w-7xl">
				<div className="bg-gray-100 sm:rounded-l-xl flex flex-col items-center px-4 py-2 mb-4">
					<div>
						{session.user.image ? (
							<Image
								className="border rounded-full"
								loader={myLoader}
								src={session.user.image}
								alt="Profile picture of user"
								width={250}
								height={250}
							/>
						) : (
							<Image
								className="border rounded-full"
								loader={myLoader}
								src="/favicon.ico"
								alt="Profile picture of user"
								width={250}
								height={250}
							/>
						)}
					</div>

					<AccountDetails
						name={user.name}
						email={user.email}
						address={user.address}
					/>
				</div>

				<SubDetails />
			</div>
		</Layout>
	);
}
