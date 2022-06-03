import {
	LocationMarkerIcon,
	MailIcon,
	UserIcon,
} from "@heroicons/react/outline";
import { useState, useEffect } from "react";

function AccountDetails(props) {
	const [editToggle, setEditToggle] = useState(false);
	const [name, setName] = useState(props.name);
	const [address, setAddress] = useState(props.address);

	useEffect(() => {
		setName(props.name);
		setAddress(props.address);
	}, [props.name, props.address]);

	const submitUserData = async (e) => {
		e.preventDefault();
		try {
			const body = { name, address };
			await fetch(`/api/user/update/${props.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			setEditToggle(!editToggle);
		} catch (error) {
			console.error(error);
		}
	};

	const cancelForm = () => {
		setEditToggle(!editToggle);
		setName(props.name);
		setAddress(props.address);
	};

	return (
		<div className="flex flex-col w-72 h-72">
			<form onSubmit={submitUserData} className="flex flex-col">
				{editToggle ? (
					<div>
						<div className="flex flex-col">
							<input
								className="mt-12 mb-6 p-2"
								autoFocus
								required
								autoComplete="name"
								type="text"
								value={name}
								placeholder="Name"
								onChange={(e) => setName(e.target.value)}
							/>

							<input
								className="mb-12 p-2"
								required
								autoComplete="street-address"
								type="text"
								value={address}
								placeholder="Address"
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>

						<div className="flex mb-12">
							<button
								type="submit"
								className="w-full flex items-center justify-center px-4 py-2 mr-2 border border-primaryGray rounded-md shadow-sm text-base font-medium text-gray-900 bg-none hover:bg-primaryGreen hover:text-white hover:border-primaryGreen transition duration-300 ease-in-out"
							>
								Save
							</button>
							<button
								onClick={cancelForm}
								className="w-full flex items-center justify-center px-4 py-2 ml-2 border border-primaryGray rounded-md shadow-sm text-base font-medium text-gray-900 bg-none hover:bg-primaryGreen hover:text-white hover:border-primaryGreen transition duration-300 ease-in-out"
							>
								Cancel
							</button>
						</div>
					</div>
				) : (
					<div>
						<div className="flex items-center mt-12 mb-4">
							<UserIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
							<h1 className="ml-4 font-semibold text-lg text-gray-800">
								{name ? name : "-"}
							</h1>
						</div>
						<div className="flex items-center mb-4">
							<MailIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
							<h2 className="ml-4 text-md text-gray-800">
								{props.email ? props.email : "-"}
							</h2>
						</div>
						<div className="flex items-center mb-12">
							<LocationMarkerIcon
								className="h-4 w-4 text-gray-500"
								aria-hidden="true"
							/>
							<p className="capitalize ml-4 text-md text-gray-800">
								{address ? address : "-"}
							</p>
						</div>
						<button
							onClick={() => setEditToggle(!editToggle)}
							className="w-full flex items-center justify-center mb-12 px-4 py-2 border border-primaryGray rounded-md shadow-sm text-base font-medium text-gray-900 bg-none hover:bg-primaryGreen hover:text-white hover:border-primaryGreen transition duration-300 ease-in-out"
						>
							Edit Profile
						</button>
					</div>
				)}
			</form>
		</div>
	);
}

export default AccountDetails;
