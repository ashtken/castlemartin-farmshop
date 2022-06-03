import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};

const AuthDetails = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				<Link href="/account">
					<a>
						<div className="w-full flex flex-wrap items-center justify-start px-4 py-2 mb-4 rounded-md text-base font-medium text-primaryGray hover:text-white hover:bg-primaryGreen transition duration-300 ease-in-out">
							{session.user.image ? (
								<Image
									className="border rounded-full"
									loader={myLoader}
									src={session.user.image}
									alt="Profile picture of user"
									width={50}
									height={50}
								/>
							) : (
								<Image
									className="border rounded-full"
									loader={myLoader}
									src="/favicon.ico"
									alt="Profile picture of user"
									width={50}
									height={50}
								/>
							)}

							<div className="ml-4">{session.user.email}</div>
						</div>
					</a>
				</Link>
				<button
					className="w-full flex items-center justify-center px-4 py-2 border border-primaryGray rounded-md shadow-sm text-base font-medium text-gray-900 bg-none hover:bg-primaryGreen hover:text-white hover:border-primaryGreen transition duration-300 ease-in-out"
					onClick={() => signOut()}
				>
					Sign out
				</button>
			</>
		);
	}
	return (
		<>
			<button
				className="w-full flex items-center justify-center px-4 py-2 border border-primaryGray rounded-md shadow-sm text-base font-medium text-gray-900 bg-none hover:bg-primaryGreen hover:text-white hover:border-primaryGreen transition duration-300 ease-in-out"
				onClick={() => signIn()}
			>
				Sign in
			</button>
		</>
	);
};

export default AuthDetails;
