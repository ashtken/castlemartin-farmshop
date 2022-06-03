import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { PlusIcon } from "@heroicons/react/outline";
import SubDropdown from "./SubDropdown";

function SubDetails() {
	const [subs, setSubs] = useState([]);
	const [update, setUpdate] = useState({});
	const { data: session } = useSession();

	useEffect(() => {
		try {
			if (session) {
				async function fetchSubs() {
					const response = await fetch(
						`/api/subscription/all/${session.userId}`
					);
					const data = await response.json();
					setSubs(data);
				}

				fetchSubs();
			}
		} catch (error) {
			console.log(error);
		}
	}, [session]);

	const updateSubStatus = async (sub) => {
		sub.active = !sub.active;
		setUpdate({ ...sub });
		console.log(sub);
		try {
			const body = { ...sub };
			await fetch(`/api/subscription/update/${sub.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="bg-gray-200 flex flex-col flex-wrap sm:rounded-r-xl grow items-center px-4 pb-2 pt-8 mb-4">
			<div className="flex justify-between w-full pb-2">
				<h1 className="capitalize font-semibold text-lg">Subscriptions</h1>
				<button className="hidden md:flex items-center justify-center px-4 py-2 border border-primaryGray rounded-md shadow-sm text-base font-medium text-gray-900 bg-none hover:bg-primaryGreen hover:text-white hover:border-primaryGreen transition duration-300 ease-in-out">
					New Subscription
				</button>
				<button className="md:hidden flex items-center justify-center px-4 py-2 border border-primaryGray rounded-md shadow-sm text-base font-medium text-gray-900 bg-none hover:bg-primaryGreen hover:text-white hover:border-primaryGreen transition duration-300 ease-in-out">
					<span>
						<PlusIcon className="h-4 w-4" aria-hidden="true" />
					</span>
				</button>
			</div>
			<ul className="w-full">
				{subs.map((sub) => (
					<li
						key={sub.id}
						className="bg-gray-50 rounded-lg my-5 py-3 px-4 flex justify-between"
					>
						<div className="flex flex-col flex-wrap justify-between">
							<h1 className="capitalize font-semibold mb-2">{sub.content}</h1>
							<p className="text-sm text-gray-500 mb-2">
								£{sub.amount_total}p/m
							</p>
							<p className="text-sm text-gray-500 capitalize">{`${sub.interval}, ${sub.size}`}</p>
						</div>
						<div className="flex">
							<div className="flex flex-col">
								{sub.active ? (
									<div className="bg-primaryGreen  py-1 px-7 rounded-full">
										<h1 className="text-white font-semibold text-sm">Active</h1>
									</div>
								) : (
									<div className="bg-amber-500 py-1 px-6 rounded-full">
										<h1 className="text-white font-semibold text-sm">Paused</h1>
									</div>
								)}
							</div>
							<div className="pt-1 ml-1">
								<SubDropdown sub={sub} updateSubStatus={updateSubStatus} />
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SubDetails;
