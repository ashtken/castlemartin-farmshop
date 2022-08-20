import { useSession } from "next-auth/react";
import Layout from "../../components/Layout";
import { CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

function Success() {
	const { data: session } = useSession();
	return (
		<Layout title="Success! | Castlemartin Farmshop">
			<div className="flex justify-center py-24">
				<div className="inline-flex items-center flex-col">
					<div>
						<CheckIcon
							className="h-36 w-36 bg-primaryGreen rounded-full text-white"
							aria-hidden="true"
						/>
					</div>
					<h1 className="capitalize text-4xl font-bold mt-12 mb-6">
						Congratulations {session?.user?.name}
					</h1>
					<h2 className="capitalize text-3xl font-semibold mb-20">
						Your subscription is now live.
					</h2>
					<div>
						<Link href={"/"}>
							<a className="px-16 py-3 mr-3 border border-primaryGray rounded-md shadow-sm text-base font-medium text-gray-900 bg-none hover:bg-primaryGreen hover:text-white hover:border-primaryGreen transition duration-300 ease-in-out">
								Home
							</a>
						</Link>
						<Link href={"/account"}>
							<a className="px-10 py-3 ml-3 border border-primaryGray rounded-md shadow-sm text-base font-medium text-gray-900 bg-none hover:bg-primaryGreen hover:text-white hover:border-primaryGreen transition duration-300 ease-in-out">
								My Account
							</a>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Success;
